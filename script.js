'use strict';
const foods = Array.isArray(window.FOODS) ? window.FOODS : [];
const $ = id => document.getElementById(id);
const searchInput = $('searchInput');
const cuisineSelect = $('cuisineSelect');
const categorySelect = $('categorySelect');
const budgetSelect = $('budgetSelect');
const foodGrid = $('foodGrid');
const dialog = $('foodDialog');
const money = amount => `NT$ ${amount.toLocaleString('zh-TW')}`;

function fillOptions(select, values) {
  [...new Set(values)].sort((a,b) => a.localeCompare(b,'zh-Hant')).forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}
function matchesBudget(price, budget) {
  if (budget === 'all') return true;
  if (budget === '1001+') return price >= 1001;
  const [min,max] = budget.split('-').map(Number);
  return price >= min && price <= max;
}
function filteredFoods() {
  const term = searchInput.value.trim().toLocaleLowerCase();
  return foods.filter(food => {
    const searchable = [food.name,food.cuisine,food.category,food.description,...food.tags].join(' ').toLocaleLowerCase();
    return searchable.includes(term) && (cuisineSelect.value === 'all' || food.cuisine === cuisineSelect.value)
      && (categorySelect.value === 'all' || food.category === categorySelect.value)
      && matchesBudget(food.price,budgetSelect.value);
  });
}
function createCard(food) {
  const card = document.createElement('button');
  card.className = 'food-card';card.type = 'button';
  const visual = document.createElement('div');visual.className='food-visual';
  const emoji = document.createElement('span');emoji.className='emoji';emoji.textContent=food.emoji;
  const cuisine = document.createElement('span');cuisine.className='cuisine';cuisine.textContent=food.cuisine;
  visual.append(emoji,cuisine);
  const info = document.createElement('div');info.className='food-info';
  const name = document.createElement('h3');name.textContent=food.name;
  const desc = document.createElement('p');desc.textContent=food.description;
  const meta = document.createElement('div');meta.className='food-meta';
  const category = document.createElement('span');category.textContent=food.category;
  const price = document.createElement('strong');price.textContent=money(food.price);
  meta.append(category,price);info.append(name,desc,meta);card.append(visual,info);
  card.setAttribute('aria-label',`查看${food.name}介紹，參考價格${money(food.price)}`);
  card.addEventListener('click',()=>showFood(food));
  return card;
}
function render() {
  const results = filteredFoods();
  foodGrid.replaceChildren(...results.map(createCard));
  $('resultCount').textContent=`找到 ${results.length} 道料理`;
  $('emptyState').hidden = results.length !== 0;
}
function showFood(food) {
  $('dialogCuisine').textContent=food.cuisine;
  $('dialogEmoji').textContent=food.emoji;
  $('dialogTitle').textContent=food.name;
  $('dialogDescription').textContent=food.description;
  $('dialogCategory').textContent=food.category;
  $('dialogPrice').textContent=money(food.price);
  const tags = food.tags.map(value=>{const span=document.createElement('span');span.className='tag';span.textContent=`# ${value}`;return span;});
  $('dialogTags').replaceChildren(...tags);
  dialog.showModal();
}
function randomFood() {
  const candidates = filteredFoods();
  if (!candidates.length) { $('emptyState').scrollIntoView({behavior:'smooth',block:'center'});return; }
  showFood(candidates[Math.floor(Math.random()*candidates.length)]);
}
fillOptions(cuisineSelect,foods.map(food=>food.cuisine));
fillOptions(categorySelect,foods.map(food=>food.category));
$('foodCount').textContent=foods.length;
[searchInput,cuisineSelect,categorySelect,budgetSelect].forEach(control=>control.addEventListener('input',render));
$('randomBtn').addEventListener('click',randomFood);
$('heroRandom').addEventListener('click',randomFood);
$('resetBtn').addEventListener('click',()=>{searchInput.value='';cuisineSelect.value='all';categorySelect.value='all';budgetSelect.value='all';render();});
$('closeDialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
render();
