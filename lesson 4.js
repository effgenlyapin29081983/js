console.log('//-----1-----//');
function getDischarges(inpNumber){

  if (inpNumber >= 0 && inpNumber <= 999){
    const Num = {
      units:0,
      dozens:0,
      hundreds:0,
    }
    let tempVar;
    Num.hundreds = Math.floor(inpNumber/100);
    tempVar = inpNumber%100;
    Num.dozens = Math.floor(tempVar/10);
    tempVar = tempVar%10;
    Num.units = Math.floor(tempVar/1);
    return Num;
  }
  else return {};
}

console.log(getDischarges(255));
console.log(getDischarges(55));
console.log(getDischarges(5));
console.log(getDischarges(1200));
console.log(getDischarges(-5));


console.log('//-----2-----//');
// Корзина (массив) будет состоять из объектов (Товар):
//[
//  {art:1, name:'Болт 10х30', count:100, price:0.35},
//  {art:2, name:'Гайка для болта 10х30', count:100, price:0.54},
//  {art:3, name:'Саморез по дереву 50', count:35, price:0.14},
//  {art:4, name:'Шуруповерт', count:1, price:5740.37},
//  {art:5, name:'Набор бит', count:3, price:354.25}
//]
class Product {
  constructor(){
    this.art = null,
    this.name = '',
    this.count = null,
    this.price = null
  }
  
  setArt(articul){
    this.art = articul;
  }
  
  setName(nameProd){
    this.name = nameProd;
  }
  
  setCount(countProd){
    this.count = countProd;
  }
  
  setPrice(priceProd){
    this.price = priceProd;
  }
  
  
  getArt(){
    return this.art;
  }
  
  getName(){
    return this.name;
  }
  
  getCount(){
    return this.count;
  }
  
  getPrice(){
    return this.price;
  }
  
  getPriceProd(){
    return this.price*this.count;
  }
}

function countBasketPrice(myBasket){
  let basketPrice = 0;
  for (let i=0; i<myBasket.length; i++) basketPrice += myBasket[i].getPriceProd();
  return basketPrice.toFixed(2);
}

const Product1 = new Product();
Product1.setArt(1);
Product1.setName('Болт 10х30');
Product1.setCount(100);
Product1.setPrice(0.35);
const Product2 = new Product();
Product2.setArt(2);
Product2.setName('Гайка для болта 10х30');
Product2.setCount(100);
Product2.setPrice(0.54);
const Product3 = new Product();
Product3.setArt(3);
Product3.setName('Саморез по дереву 50');
Product3.setCount(35);
Product3.setPrice(0.14);
const Product4 = new Product();
Product4.setArt(4);
Product4.setName('Шуруповерт');
Product4.setCount(1);
Product4.setPrice(5740.37);
const Product5 = new Product();
Product5.setArt(5);
Product5.setName('Набор бит');
Product5.setCount(3);
Product5.setPrice(354.25);
let Basket = [];
Basket.push(Product1);
Basket.push(Product2);
Basket.push(Product3);
Basket.push(Product4);
Basket.push(Product5);
console.log(Basket);

console.log(countBasketPrice(Basket));