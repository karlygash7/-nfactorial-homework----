// Создать свой Ресторан / Магазин / Футбольную команду
// Продуктовый магазин 3 нуля))

const shopName = '000';
const BIRTHDAY = '12.01.2023';
let open = true;
let shop ={
    productName: 'Bread',
    price: 120,
    isAvailable: true,
    typesOfBreads: {
        first: 'White bread',
        second: 'Wheat bread',
        third: 'Rye bread',
        fourth: 'French bread',
        fifth: 'Pita bread'
    },
    isHalal: '',  
};
shop.company = 'Ulytau-Nan'; //добавление
shop['companyCity'] = 'Zhezkazgan'; //добавление через прямые скобки
shop.price = 200; //изменение 
delete shop.isHalal; //удаление

console.log(shop);
console.log(shop['typesOfBreads']);


// Работа с объектами
let vehicle = {
    brandName: 'BMW',
    model: 'X5',

}
vehicle.model = 'M1';
delete vehicle.model;
console.log(vehicle);

// Работа с перебором свойств в объектах
let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130,
    Karlygash: 120,
}
for (let key in salaries){
    console.log('Все значения =', salaries.Aroo+salaries.Dalida+salaries.Samat+salaries.Karlygash)
}