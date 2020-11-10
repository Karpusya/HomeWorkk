// створити об'єкт (не менше 5ти властивостей), який описує

//собаку
// const dog = {
//     name : 'Tuzik',
//     age : 4,
//     color: 'white',
//     canSitDown : true,
//     owner : 'Karpusya'
// }
// console.log(dog);

// людину
// const man = Object.create(null);
// man.name = 'Oksana';
// man.age = 30;
// man.surname = 'Karpevych';
// man.hasIPhone = true;
// man.hasCat = false;
// console.log(man);

// автомобіль
// const car = {
//     brand : 'Nissan',
//     model : 'Juke',
//     year : 2020,
//     type : 'crossrover',
//     color : 'yellow'
// }
//console.log(car);

// квартиру
// const flat = {
//     s : 90,
//     rooms : 3,
//     hasGarden : false,
//     hasBalcony : true,
//     price : 80000
// }
//console.log(flat);

// книгу

// const book = {
//     pages : 480,
//     name : 'La Sombra del Viento',
//     author: 'Carlos Ruiz Zafon',
//     published: 2001,
//     language: 'Spanish'
// }
// console.log(book);


//Створити масив та вивести його в консоль:

//з 5 собак

// const dogs = ['Tuzik', 'Chapik', 'Amur', 'Topik', 'Zbyshko'];

//3 5 людей

// const people = ['Olena Demshyshyn', 'Olha Liutikova', 'Mykola Brunarskiy', 'Maria Manzhos', 'Bohdana Demchyshyn'];

//з 5 автомобілів

// const cars = ['Nissan Juke', 'Nissan Qashqai', 'Nissan Leaf', 'Nissan Murano', 'Nissan Rogue'];

// console.log(dogs, people, cars);





// створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// будинок

// const house = {

//     rooms : ['living room', 'bedroom', 'kitchen', 'bathromm'],
//     parameters : {
//       floor : 1,
//       area : 120
//     },
//     location: 'Lviv',
//     price : 140000,
//     country : 'Ukraine'
// }
//     console.log(house)

// - водій

// const driver = {
//     skills : ['driving', 'speed driving'],
//     parameters : {
//         age : 35,
//         name : 'Mykola'
//     },
//     home : 'Lviv',
//     hasWife : false,
//     hasChildren : true
// }
// console.log(driver)

// - іграшку

// const toy = {

// style : ['Constructor', 'Constructir for Adults'],
//     parameters : {
//         forAge : 10,
//         name : 'Lego'
//     },
//     madeIn : 'Great Britain',
//     forChildren : true,
//     forAdult : true,
// forKids: false,
// }
// console.log(toy)

// стіл

// const table = {
//     style : ['wooden', 'classic'],
//     parameters : {
//         color : 'brown',
//         name : 'table for kitchen'
//     },
//     madeIn : 'Ukraine',
//     forDinner : true,
//     forWork : false
// }
// console.log(table)


//сумка

// const handbag= {
//     style : ['casual', 'smart'],
//     parameters : {
//         Sex : 'Famale',
//         name : 'Gucci'
//     },
//     madeIn : 'Italy',
//     forMen : false,
//     forWomen : true
// }
// console.log(handbag)

// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];

//звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

// console.log(users[7].status);

// //ім'я передостаннього об'єкту

// console.log(users[users.length - 2].name);

// //ім'я третього об'єкта

// console.log(users[2].name);

// //вік Олега
// console.log(users[6].age);

// //вік Олі
// console.log(users[3].age);

// //вік + ім'я 5го об'єкта
// console.log(users[4].age, users[4].name);

// // вік + сатус Анни
//  console.log(users[5].age, users[5].status);

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// отримує текст з параграфа з id "content"

// let content = document.getElementById('content');
// console.log(content.innerText);

// отримує текст з блоку з id "rules"

// let rules = document.getElementById('rules');
// console.log(rules.innerText);

//замініть текст параграфа з id 'content' на будь-який інший

// content.innerText = 'шось там треба написати';

//замініть текст параграфа з id 'rules' на будь-який інший

// rules.innerText = 'шось таке';

//змініть кожному елементу колір фону на червоний

// let list = document.getElementsByTagName('ul')[0];
//
// content.style.backgroundColor = 'red';
// rules.style.backgroundColor = 'red';
// list.style.backgroundColor = 'red';

//змініть кожному елементу колір тексту на синій

// content.style.color = 'blue';
// rules.style.color = 'blue';
// list.style.color = 'blue';

// отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(rules.classList);

// отримати всі елементи з класом fc_rules

// let fcRules = document.getElementsByClassName('fc_rules');
// console.log(fcRules);

// поміняти колір тексту у всіх елементів fc_rules на червоний

// for (const element of fcRules) {
//   element.style.color = 'red';
// }