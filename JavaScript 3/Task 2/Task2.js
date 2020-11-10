// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

const dog = {
    name : 'Tuzik',
    age : 4,
    color: 'white',
    canBringBone : true,
    owner : 'Karpusya'
};

const woman = {
    surname: 'Karpevych',
    hasDog: true,
    hasCat: false
};

const car = {
    brand : 'Nissan',
    model : 'Juke',
    year : 2020,
    type : 'crossrover',
    color : 'yellow'
};

const flat = {
    appartmentArea : 90,
    rooms : 3,
    hasGarden : false,
    hasBalcony: true,
    price : 80000
};


const book = {
    pages : 480,
    name : 'La Sombra del Viento',
    author: 'Carlos Ruiz Zafon',
    published: 2001,
    language: 'Spanish'
}

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };


const house = {

    rooms : ['living room', 'bedroom', 'kitchen', 'bathromm'],
    parameters : {
      floor : 1,
      area : 120
    },
    location: 'Lviv',
    price : 140000,
    country : 'Ukraine'
};


const driver = {
    skills : ['driving', 'speed driving'],
    parameters : {
        age : 35,
        name : 'Mykola'
    },
    home : 'Lviv',
    hasWife : false,
    hasChildren : true
};


const toy = {

style : ['Constructor', 'Constructir for Adults'],
    parameters : {
        forAge : 10,
        name : 'Lego'
    },
    madeIn : 'Great Britain',
    forChildren : true,
    forAdult : true,
forKids: false,
};

const desk = {
    style: ['black series', 'white series'],
    parameters: {
        color: 'black',
        name: 'computer desk'
    },
    madeIn: 'Germany',
    forChildren: true,
    forAdult: false
};

const table = {
    style : ['wooden', 'classic'],
    parameters : {
        color : 'brown',
        name : 'table for kitchen'
    },
    madeIn : 'Ukraine',
    forDinner : true,
    forWork : false
};

// При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const key in dog) {
//     console.log(key);
// }
// for (const key in woman) {
//     console.log(key);
// }
// for (const key in car) {
//     console.log(key);
// }
// for (const key in flat) {
//     console.log(key);
// }
// for (const key in book) {
//     console.log(key);
// }
// for (const key in house) {
//     console.log(key);
// }
// for (const key in driver) {
//     console.log(key);
// }
// for (const key in toy) {
//     console.log(key);
// }
// for (const key in table) {
//     console.log(key);
// }

//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(dog));
// console.log(Object.keys(woman));
// console.log(Object.keys(car));
// console.log(Object.keys(flat));
// console.log(Object.keys(book));
// console.log(Object.keys(house));
// console.log(Object.keys(driver));
// console.log(Object.keys(toy));
// console.log(Object.keys(table));

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// const cars = [
//     coche =
//     {
//         model: 'BMW',
//         madeYear: 2020,
//         power: 220,
//         color: 'black',
//     },
//     coche =
//     {
//         model: 'KIA',
//         madeYear: 2018,
//         power: 180,
//         color: 'blue',
//     },
//     coche =
//     {
//         model: 'Mersedes',
//         madeYear: 2020,
//         power: 210,
//         color: 'red',
//     },
//     coche =
//     {
//         model: 'Toyota',
//         madeYear: 2017,
//         power: 180,
//         color: 'white',
//     },
//     coche =
//     {
//         model: 'Hunday',
//         madeYear: 2019,
//         power: 200,
//         color: 'orange',
//     },
//     coche =
//     {
//         model: 'Volkswagen',
//         madeYear: 2016,
//         power: 220,
//         color: 'green',
//     },
//     coche =
//     {
//         model: 'Audi',
//         madeYear: 2018,
//         power: 240,
//         color: 'brown',
//     },
//     coche =
//     {
//         model: 'Renault',
//         madeYear: 2017,
//         power: 180,
//         color: 'yellow',
//     },
//     coche =
//     {
//         model: 'Fiat',
//         madeYear: 2019,
//         power: 170,
//         color: 'gray',
//     },
//     coche =
//     {
//         model: 'Alfa Romeo',
//         madeYear: 2015,
//         power: 190,
//         color: 'purple',
//     },
// ];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// const cities = [
//     city =
//     {
//         name: 'New York',
//         population: 12000000,
//         country: 'USA',
//         state: 'Нью-Йорк'
//     },

//     city =
//     {
//         name: 'Washington',
//         population: 8000000,
//         country: 'USA',
//         state: 'Вірджинія'
//     },

//     city =
//     {
//         name: 'Chicago',
//         population: 3000000,
//         country: 'USA',
//         state: 'Іллінойс'
//     },
// ];

// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// const cars2 = [
//     coche2 =
//     {
//         model: 'Qashqai',
//         madeYear: 2020,
//         power: 240,
//         color: 'yellow',
//         driver: {
//             name: 'Oleh',
//             age: 46,
//             sex: 'male',
//             experience: 20
//         }
//     },

//     coche2 =
//     {
//         model: 'Leaf',
//         madeYear: 2010,
//         power: 180,
//         color: 'red',
//         driver: {
//             name: 'Vasyl',
//             age: 29,
//             sex: 'male',
//             experience: 8
//         }
//     },

//     coche2 =
//     {
//         model: 'Muran',
//         madeYear: 2017,
//         power: 220,
//         color: 'orange',
//         driver: {
//             name: 'Andriy',
//             age: 34,
//             sex: 'male',
//             experience: 15
//         }
//     },
// ];

// проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
//     if (i === cars.length) {
//         i = 0;
//         break;
//     }
// }
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++;
//     if (i === cities.length) {
//         i = 0;
//         break;
//     }
// }
// while (i < cars2.length){
//     console.log(cars2[i]);
//     i++;
//     if (i === cars2.length) {
//         i = 0;
//         break;
//     }
// }

//  проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < cars2.length; i++) {
//     console.log(cars2[i]);
// }

//  проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const coche of cars) {
//     console.log(coche);
// }
// for (const city of cities) {
//     console.log(city);
// }
// for (const coche2 of cars2) {
//     console.log(coche2);
// }

// взять объекты из задания 1 и превратить каждый в json.

// let newDog = JSON.stringify(dog);
// let newWoman = JSON.stringify(woman);
// let newCar = JSON.stringify(car);
// let newFlat = JSON.stringify(flat);
// let newBook = JSON.stringify(book);

// взять json из задания 11 и превратить их обратно в объекты.

// newDog = JSON.parse(newDog);
// newWoman = JSON.parse(newWoman);
// newCar = JSON.parse(newCar);
// newFlat = JSON.parse(newFlat);
// newBook = JSON.parse(newBook);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (let coche of cars) {
//     coche = JSON.stringify(coche);
// }

// взять массив из задания 6,в цикле перебрать его объекты превратив их в json.

// for (let city of cities) {
//     city = JSON.stringify(city);
// }

//  взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скопировать в новый массив.

// let newCarsJSON = [];
// for (let coche2 of cars2) {
//     let newCar = JSON.stringify(coche2);
//     newCarsJSON.push(newCar);
// }

// Создать массив пользователей. У каждого пользователя обязательно должно быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {
//         name: 'Karpusya',
//         age: 30,
//         married: false,
//         skills: [
//             'English',
//             'Polish',
//             'Spanish'
//         ]
//     },
//     {
//         name: 'Kateryna',
//         age: 34,
//        married: true,
//         skills: [
//             'Italian,
//             'Rissian',
//             'English'
//         ]
//     },
//     {
//         name: 'Nadia',
//         age: 29,
//         married: false,
//         skills: [
//             'German',
//             'Polish',
//             'English'
//         ]
//     },
// ];
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// let users = [
//     {
//         name: 'Karpusya',
//         age: 30,
//         married: false,
//         skills: [
//             'English',
//             'Polish',
//             'Spanish'
//         ]
//     },
//     {
//         name: 'Kateryna',
//         age: 34,
//        married: true,
//         skills: [
//             'Italian',
//             'Rissian',
//             'English'
//         ]
//     },
//     {
//         name: 'Nadia',
//         age: 29,
//         married: false,
//         skills: [
//             'German',
//             'Polish',
//             'English'
//         ]
//     },
// ];
//
//  let skillsArr = [];
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         skillsArr.push(skill);
//     }
// }
// console.log(skillsArr);

//За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

//let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];

// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [
//     {name: 'vasya', age: 31, address: 'Lviv', status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, address: 'Kyiv', status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, address: 'Kharkiv', status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, address: 'Dnipro', status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, address: 'Strui', status: true, skills: ['mysql', ',mongo']}
// ];
// let usersAddresses = [];
// for (const user of users) {
//     usersAddresses.push(user.address);
// }
// console.log(usersAddresses);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let div = document.createElement('div');
//     div.innerText = `Name: ${user.name}, age: ${user.age}, address: ${user.address}, status: ${user.status}`;
//     document.body.appendChild(div);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let div = document.createElement('div');
//     div.style.margin = '5px';
//     div.innerHTML = `<div>Name: ${user.name}</div><div>age: ${user.age}</div><div>address: ${user.address}</div><div>status: ${user.status}</div>`;
//     document.body.appendChild(div);
// }

// // - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// //
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// for (const user of users) {
//     let div = document.createElement('div');
//     div.style.margin = '5px';
//     div.innerHTML = `<div>Name: ${user.name}</div><div>age: ${user.age}</div><div>address: <div>${user.address.city}</div><div>${user.address.country}</div><div>${user.address.street}</div><div>${user.address.houseNumber}</div></div><div>status: ${user.status}</div>`;
//     document.body.appendChild(div);
// }


// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //    Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// //    let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     usersWithCities[i] = usersWithId[i];
//     for (const cityObj of citiesWithId) {
//         if (cityObj.user_id === usersWithCities[i].id){
//             usersWithCities[i].address = cityObj;
//         }
//     }
//
// }
// console.log(usersWithCities);


// створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let aside = document.getElementsByTagName('aside')[0];
// let myBlock = document.getElementById('myBlock');
// let myBlockClass = document.getElementsByClassName('myBlockClass')[0];
// console.log(aside);
// console.log(myBlock);
// console.log(myBlockClass);

//змінити цей текст використовуючи селектори id, class,  tag
// aside.style.fontSize = '40px';
// myBlock.style.color = 'orange';
// myBlockClass.style.fontWeight = 'bold';

// змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// aside.style.width = '80%';
// myBlock.style.height = '300px';
// myBlockClass.style.padding = '20px';

// за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table');
// document.body.appendChild(table);

// let tr = document.createElement('tr');
// let td = document.createElement('td');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');

// td.innerText = 'lorem';
// td1.innerText = 'ipsum';
// td2.innerText = 'dolor';
// table.appendChild(tr);

// tr.appendChild(td);
// tr.appendChild(td1);
// tr.appendChild(td2);


// за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table = document.createElement('table');
// document.body.appendChild(table);

// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
//     let td1 = document.createElement('td');
//     let td2 = document.createElement('td');

//     td.innerText = 'шось таке';
//     td1.innerText = 'непонятне';
//     td2.innerText = 'зовсім непонятне';
//     tr.appendChild(td);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     table.appendChild(tr);
//
// }

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table = document.createElement('table');
// document.body.appendChild(table);
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let table = document.createElement('table');
// document.body.appendChild(table);
// const n = +prompt('Enter rows count');
// const m = +prompt('Enter cols count');
// for (let i = 0; i < n; i++) {
//     let tr = document.createElement('tr');
//     for (let j = 0; j < m; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }



// Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//знайти всі елементі, які мають class
// знайти всі параграфи ,та змінити текст на hello oktenweb!
// let paragraph = document.getElementsByTagName('p');
// for (const p of paragraph) {
//     p.innerText = 'Втомилась від цієї домашки';
// }
//     - знайти всі div та змінити ім колір на червоний
// let div = document.getElementsByTagName('div');
// for (const element of div) {
//     element.style.backgroundColor = 'red';
// }