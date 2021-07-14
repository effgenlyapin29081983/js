/* 1 */
/* функция определения простоты числа */
function prime(n){ 
	for(let i=2;i<=Math.sqrt(n);i++){
		if(n%i==0) return false;
	}	
	return true;
}
console.log('=== 1 задание ===');
for (let num = 0; num < 100; num++){
  if (prime(num)) console.log(num);
}

/* 2 - 3 */
/* Структура корзины */
/* Артикул  Наименование              Количество  Цена(шт) */
/* 1        Болт 10х30                100         0.35     */
/* 2        Гайка для болта 10х30     100         0.54     */
/* 3        Саморез по дереву 50      35          0.14     */
/* 4        Шуруповерт                1           5740.37  */
/* 5        Набор бит                 3           354.25   */

let myBasket = [[1, 'Болт 10х30', 100, 0.35],
             [2, 'Гайка для болта 10х30', 100, 0.54],
             [3, 'Саморез по дереву 50', 35, 0.14],
             [4, 'Шуруповерт', 1, 5740.37],
             [5, 'Набор бит', 3, 354.25]
            ];
function countBasketPrice(){
  let basketPrice = 0;
  for (let i=0; i<myBasket.length; i++) basketPrice += myBasket[i][2] * myBasket[i][3];
  return basketPrice;
}
console.log('=== 2 задание ===');
console.log('Цена товаров в корзине: '+countBasketPrice().toFixed(2));

/* 4 */
console.log('=== 4 задание ===');
for (let i = 0; i<=9; console.log(i), i++){}

/* 5 */
console.log('=== 5 задание ===');
for (let i = 1; i<=20; console.log("".padStart(i, "*")), i++){}