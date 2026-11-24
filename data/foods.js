// Foodpedia 的唯一料理資料來源。新增資料前請先閱讀 AGENTS.md。
window.FOODS = [
  {id:'taiwan-braised-pork-rice',name:'滷肉飯',cuisine:'台式',category:'飯類',price:65,emoji:'🍚',description:'鹹香滷肉淋在熱騰騰的白飯上，是經典又親切的台灣味。',tags:['平價','午餐']},
  {id:'taiwan-beef-noodles',name:'紅燒牛肉麵',cuisine:'台式',category:'麵類',price:190,emoji:'🍜',description:'濃郁湯頭搭配軟嫩牛肉與麵條，吃完很有滿足感。',tags:['熱湯','晚餐']},
  {id:'japan-salmon-don',name:'鮭魚丼飯',cuisine:'日式',category:'飯類',price:280,emoji:'🍣',description:'鮭魚搭配米飯與配菜，適合想吃清爽一點的時候。',tags:['海鮮','午餐']},
  {id:'japan-tonkotsu-ramen',name:'豚骨拉麵',cuisine:'日式',category:'麵類',price:250,emoji:'🍥',description:'香濃豚骨湯底與彈牙麵條，是人氣日式料理。',tags:['熱湯','晚餐']},
  {id:'korea-bibimbap',name:'韓式拌飯',cuisine:'韓式',category:'飯類',price:230,emoji:'🥘',description:'米飯搭配多種蔬菜與韓式醬料，拌勻後風味豐富。',tags:['蔬菜','午餐']},
  {id:'korea-fried-chicken',name:'韓式炸雞',cuisine:'韓式',category:'炸物',price:360,emoji:'🍗',description:'酥脆炸雞裹上甜辣醬汁，適合朋友一起分享。',tags:['分享','晚餐']},
  {id:'thai-pad-thai',name:'泰式炒河粉',cuisine:'泰式',category:'麵類',price:210,emoji:'🍝',description:'酸甜鹹香的炒河粉，搭配豆芽與花生增添口感。',tags:['酸甜','午餐']},
  {id:'thai-green-curry',name:'泰式綠咖哩',cuisine:'泰式',category:'飯類',price:260,emoji:'🍛',description:'椰奶香氣與香料融合，配白飯特別對味。',tags:['香料','晚餐']},
  {id:'italy-margherita-pizza',name:'瑪格麗特披薩',cuisine:'義式',category:'披薩',price:420,emoji:'🍕',description:'番茄、起司與羅勒的經典組合，簡單卻很耐吃。',tags:['起司','分享']},
  {id:'italy-carbonara',name:'培根奶油義大利麵',cuisine:'義式',category:'麵類',price:320,emoji:'🍝',description:'濃郁醬汁包覆麵條，適合想吃飽又想犒賞自己的日子。',tags:['濃郁','晚餐']},
  {id:'france-onion-soup',name:'法式洋蔥湯',cuisine:'法式',category:'湯品',price:260,emoji:'🧅',description:'慢煮洋蔥帶出自然甜味，搭配烤麵包與起司。',tags:['熱湯','起司']},
  {id:'france-crepe',name:'法式可麗餅',cuisine:'法式',category:'甜點',price:190,emoji:'🥞',description:'薄薄的餅皮搭配水果或巧克力，適合下午茶。',tags:['甜點','下午茶']},
  {id:'usa-burger',name:'美式起司漢堡',cuisine:'美式',category:'漢堡',price:290,emoji:'🍔',description:'多汁肉排、起司與蔬菜層層堆疊，經典又過癮。',tags:['肉類','午餐']},
  {id:'vietnam-pho',name:'越式河粉',cuisine:'越式',category:'麵類',price:220,emoji:'🍲',description:'清香湯頭與滑順河粉，加入香草後更加清爽。',tags:['熱湯','清爽']},
  {id:'india-butter-chicken',name:'印度奶油雞咖哩',cuisine:'印度',category:'咖哩',price:380,emoji:'🍛',description:'番茄奶油醬汁搭配香料雞肉，適合配烤餅享用。',tags:['香料','晚餐']},
  {id:'hongkong-egg-waffle',name:'港式雞蛋仔',cuisine:'港式',category:'甜點',price:110,emoji:'🧇',description:'外酥內軟的格子造型點心，邊走邊吃也方便。',tags:['點心','下午茶']},
  {id:'veggie-salad',name:'彩虹蔬菜沙拉',cuisine:'蔬食',category:'沙拉',price:240,emoji:'🥗',description:'以多種新鮮蔬菜搭配清爽醬汁，口感豐富。',tags:['蔬菜','清爽']},
  {id:'brunch-eggs-benedict',name:'班尼迪克蛋',cuisine:'早午餐',category:'早午餐',price:340,emoji:'🍳',description:'水波蛋、麵包與荷蘭醬的組合，適合悠閒假日。',tags:['早午餐','蛋料理']},
  {id:'hotpot-spicy',name:'麻辣火鍋',cuisine:'台式',category:'火鍋',price:850,emoji:'🍲',description:'香麻帶勁的鍋底搭配肉片與蔬菜，聚餐很合適。',tags:['聚餐','辣']},
  {id:'japan-omakase',name:'日式無菜單料理',cuisine:'日式',category:'套餐',price:1500,emoji:'🍱',description:'由料理人安排當季餐點，適合想嘗試精緻料理的時候。',tags:['精緻','聚餐']},
  {id:'france-creme-brulee',name:'法式焦糖烤布蕾',cuisine:'法式',category:'甜點',price:180,emoji:'🍮',description:'表層焦糖酥脆，內層奶香濃郁，適合當作餐後甜點。',tags:['甜點','下午茶']}
];
