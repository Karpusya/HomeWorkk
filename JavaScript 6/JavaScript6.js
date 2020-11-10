
// создать массив с 20 числами.

// const array1 = [20, 4, 60, 2, 208, -2, 476, 2262, -30, 0, 10, 6, 18, 30, 42, 66, 22, 40, 140, 199];

// при помощи метода sort и колбека  отсортировать массив в порядке зростания.

// let sort1 = array1.sort ((k,m)=>{
//     return k - m;
//
// });
//
//  console.log (array1);


// при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// console.log(array1.sort((k, m) => m - k));

// при помощи filter получить числа кратные 3

// console.log(array1.filter(value => !(value % 3)));

// при помощи filter получить числа кратные 10

// result = array1.filter(value => value%10===0);
// console.log(result);

//перебрать (проитерировать) массив при помощи foreach()
// array1.forEach((value, index, array) => console.log(value, index, array));

// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let new_array = array1.map(value => {
//     return value*3;
// })
// console.log(new_array);


// создать массив со словами на 15-20 элементов.
// let wordsArray=['шось','таке','зовсім','непонятне','аби','щось','написати','та','щоб','воно','собі', 'ось','так','було','в','мене','на','домашці']

// отсортировать его по алфавиту в восходящем порядке.
// wordsArray.sort();
// console.log(wordsArray);

// отсортировать его по алфавиту  в нисходящем порядке.
// wordsArray.sort((a,b)=>{
//     return -1;
// });
// console.log(wordsArray);

// отфильтровать слова длиной менее 4х символов
// let result =wordsArray.filter(value => value.length<=4);
// console.log(result);


// перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// const  xxx = wordsArray.map(value => value + '!');
// console.log(xxx);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

// let users = [ {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];

// відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a,b)=>{
//     return a.age-b.age;
// });
// console.log(users);
//
// users.sort((a,b)=>{
//     return b.age-a.age;
// });
// console.log(users);

//відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a,b)=> {
//     return a.name.length - b.name.length;
//     }
// )
// console.log(users);

// users.sort((a,b)=>{
//     return b.name.length-a.name.length;
// })
// console.log(users);

// пройтись по ньому та додати кожному юзеру поле id - яке
// характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// users.map((value,index)=>{
//     return value['id']=index;
//     }
// );
// console.log(users);
// //відсортувати його за індентифікатором
// //Відсортував за ід в порядку спадання
// users.sort((a,b)=>{
// return b['id']-a['id'];
//     });

// написать функцию калькулятора с 2мя числами и колбеком

// function plus(k, z) {
//     return k + z;
// }
// function minus(k, z) {
//     return k - z;
// }
// function multiply(k, z) {
//     return k * z;
// }
// function divide(k, z) {
//     return k / z;
// }
// function calculation (k, z, action){
//     return action(k, z)};
//
// console.log(calculation(10, 5, plus));
// console.log(calculation(10, 5, minus));
// console.log(calculation(10, 5, multiply));
// console.log(calculation(10, 5, divide));



//написать функцию калькулятора с 3мя числами и колбеком
// function plus1(k, l, m) {
//     return k + l + m;
// }
// function minus1(k, l, m) {
//     return k - l - m;
// }
// function multiply1(k, l, m) {
//     return k * l * m;
// }
// function divide1(k, l, m) {
//     return k / l / m;
// }
// function calculation1(k, l, m, action){
//     return action(k, l, m);
// }
// console.log(calculation1(10, 5, 2, plus1));
// console.log(calculation1(10, 5, 2, minus1));
// console.log(calculation1(10, 5, 2, multiply1));
// console.log(calculation1(10, 5, 2, divide1));

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними критеріями
// двигун більше 3х літрів

// console.log(cars.filter(value => {
//     if(value.volume > 3) return value;
// }));


// двигун = 2л

// console.log(cars.filter(value => {
//     if(value.volume === 2) return value;
// }));

//  виробник мерс
// console.log(cars.filter(value => {
//     if(value.producer === 'mercedes') return value;
// }));

//двигун більше 3х літрів + виробник мерседес
// console.log(cars.filter(value => {
//     if(value.producer === 'mercedes' && value.volume >= 3) return value;
// }));


//  двигун більше 3х літрів + виробник субару
// console.log(cars.filter(value => {
//     if(value.producer === 'subaru' && value.volume >= 3) return value;
// }));

// сили більше ніж 300
// console.log(cars.filter(value => {
//     if(value.power > 300) return value;
// }));

// сили більше ніж 300 + виробник субару
// console.log(cars.filter(value => {
//     if(value.power > 300 && value.producer === 'subaru') return value;
// }));

//мотор серіі ej
// console.log(cars.filter(value => {
//     if(value.engine.startsWith('ej')) return value;
// }));


// сили більше ніж 300 + виробник субару + мотор серіі ej
// console.log(cars.filter(value => {
//     if(value.engine.startsWith('ej') && value.power > 300 && value.producer === 'subaru') return value;
// }));


// двигун меньше 3х літрів + виробник мерседес
// console.log(cars.filter(value => {
//     if(value.volume < 3 && value.producer === 'mercedes') return value;
// }));

//двигун більше 2л + сили більше 250

// console.log(cars.filter(value => {
//     if(value.volume > 2 && value.power > 250) return value;
// }));

//  сили більше 250  + виробник бмв

// console.log(cars.filter(value => {
//     if(value.producer === 'bmw' && value.power > 250) return value;
// }));

// взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Bandery', number: 121}} ]

//отсортировать его по id пользователей
// console.log(usersWithAddress.sort((k, l) => k.id - l.id));

// отсортировать его по id пользователей в обратном опрядке
// console.log(usersWithAddress.sort((k, l) => l.id - k.id));

//отсортировать его по возрасту пользователей
// console.log(usersWithAddress.sort((k, l) => k.age - l.age));

// отсортировать его по возрасту пользователей в обратном порядке
// console.log(usersWithAddress.sort((k, l) => l.age - k.age));

// отсортировать его по имени пользователей
// console.log(usersWithAddress.sort((k, l) => {
//     let nameK = k.name.toLowerCase();
//     let nameL = l.name.toLowerCase();
//     if (nameK < nameL) return -1;
//     if (nameK > nameL) return 1;
// }));

// отсортировать его по имени пользователей в обратном порядке
// console.log(usersWithAddress.sort((k, l) => {
//     let nameK = k.name.toLowerCase();
//     let nameL = l.name.toLowerCase();
//     if (nameK < nameL) return 1;
//     if (nameK > nameL) return -1;
// }));

//отсортировать его по названию улицы  в алфавитном порядке
// let xxx = usersWithAddress.sort((k, l) => {
//     if (k.address.street > l.address.street) {
//         return  1;
//     }
//         return  -1;
// });
//
// console.log(xxx);