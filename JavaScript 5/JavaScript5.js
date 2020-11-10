// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function Tag(tagFirstname, tagACtivity, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2){
//     this.titleOfTag = tagFirstname;
//     this.action = tagACtivity;
//     this.attrs = [
//         {
//             titleOfAttr: titleOfAttr1,
//             actionOfAttr: actionOfAttr1
//         },
//         {
//             titleOfAttr: titleOfAttr2,
//             actionOfAttr: actionOfAttr2
//         }
//     ];
// }

// const a = new Tag('a', `Тег <a> являється одним з важливих елементів HTML, призначений для створення посилань.`, 'href', 'Задає адресу документа, на який слід перейти.', 'name', 'Встановлює назву якоря всередині документа.');
// console.log(a);
// const div = new Tag('div', `Елемент <div> є блочним елементом і є призначений для виділення фрагменту документа з метою зміни виду вмісту.`, 'align', 'Задає вирівнювання вмістимого тегу <div>.', 'title', 'Добавляє підказку до змісту');
// console.log(div);
// const h1 = new Tag('h1', 'HTML пропонує шість заголовків різних рівнів, які  показують відносну важливісь секції, розміщеної після заголовка. Для прикладу, тег <h1> представляє собою найважливіший заголовок першого рівня, а тег <h6> служить для позначення заголовка шостого рівня і являється наменш значимим', 'align', 'Оприділяє вірівнювання заголовка.', 'class', 'Оприділяє назву класа, який дозволяє зв\'язати тег зі стилевим оформленням.');
// console.log(h1);
// const span = new Tag('span', 'Тег <span> призначений для розташування рядкових елементів документа. На відміну від блочних елементів, таких как <table>, <p> або <div>, з допомогою тега <span> можна виділити частину інформації всередині інших тегів  і встановити для неї власний стиль', 'id', 'Вказує назву стилевого ідентифікатора.', 'hidden', 'Приховує вміст елемента від перегляду.');
// console.log(span);
// const input = new Tag('input', 'Тег <input> є одним з різнобічних елементів форми и позволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різноманітних кнопок, перемикачів і прапорців', 'accept', 'Встановлює фільтр на типи файлів, які ви можете відправити через поле загрузки файлів.', 'checked', 'Попередньо активований перемикач або прапорець');
// console.log(input);
// const form = new Tag('form', 'Тег <form> встановлює форму на веб-сторінці. Форма призначена для обміну даних між користувачами і сервером.', 'action', 'Адреса програми або документа, який обробляє дані форми.','name','Назва форми.');
// console.log(form);
// const option = new Tag('option', 'Тег <option> опридідяє оеремі пункти списку, створеного з допомогою контейнера <select>. Ширина списку оприділяється з найширшим, вказаним в тезі <option>, а також може змінюватись з допомогою стилів.', 'disabled', 'Заблокувати для доступу елемент списку.', 'selected', 'Заздалегідь встановлює певний пункт списку виділеним');
// console.log(option);
// const select = new Tag('select', 'Тег <select> дозволяє створювати елементи інтерфейсу в вигляді розкриваючого списку, а також список з одним або багаточисленним вибором, як показано дальше. Кінцевий вигляд залежить від використання атрибуту size тега <select>, якийвстановлює висоту спискуу.', 'accesskey', 'Дозволяє перейти до списку з допомогою деякого поєднання клавіш.','form', 'Зв\'язує список з формою.');
// console.log(select);

// ==============================================
//
//
// ==============================================
//  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// class Tag{
//     constructor(tagFirstname,tagACtivity, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
//         this.titleOfTag = tagFirstname;
//         this.action = tagACtivity;
//         this.attrs = [
//             {
//                 titleOfAttr: titleOfAttr1,
//                 actionOfAttr: actionOfAttr1
//             },
//             {
//                 titleOfAttr: titleOfAttr2,
//                 actionOfAttr: actionOfAttr2
//             }
//         ];
//     }
// }
// const a = new Tag('a', `Тег <a> являється одним з важливих елементів HTML, призначений для створення посилань.`, 'href', 'Задає адресу документа, на який слід перейти.', 'name', 'Встановлює назву якоря всередині документа.');
// console.log(a);
// const div = new Tag('div', `Елемент <div> є блочним елементом і є призначений для виділення фрагменту документа з метою зміни виду вмісту.`, 'align', 'Задає вирівнювання вмістимого тегу <div>.', 'title', 'Добавляє підказку до змісту');
// console.log(div);
// const h1 = new Tag('h1', 'HTML пропонує шість заголовків різних рівнів, які  показують відносну важливісь секції, розміщеної після заголовка. Для прикладу, тег <h1> представляє собою найважливіший заголовок першого рівня, а тег <h6> служить для позначення заголовка шостого рівня і являється наменш значимим', 'align', 'Оприділяє вірівнювання заголовка.', 'class', 'Оприділяє назву класа, який дозволяє зв\'язати тег зі стилевим оформленням.');
// console.log(h1);
// const span = new Tag('span', 'Тег <span> призначений для розташування рядкових елементів документа. На відміну від блочних елементів, таких как <table>, <p> або <div>, з допомогою тега <span> можна виділити частину інформації всередині інших тегів  і встановити для неї власний стиль', 'id', 'Вказує назву стилевого ідентифікатора.', 'hidden', 'Приховує вміст елемента від перегляду.');
// console.log(span);
// const input = new Tag('input', 'Тег <input> є одним з різнобічних елементів форми и позволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різноманітних кнопок, перемикачів і прапорців', 'accept', 'Встановлює фільтр на типи файлів, які ви можете відправити через поле загрузки файлів.', 'checked', 'Попередньо активований перемикач або прапорець');
// console.log(input);
// const form = new Tag('form', 'Тег <form> встановлює форму на веб-сторінці. Форма призначена для обміну даних між користувачами і сервером.', 'action', 'Адреса програми або документа, який обробляє дані форми.','name','Назва форми.');
// console.log(form);
// const option = new Tag('option', 'Тег <option> опридідяє оеремі пункти списку, створеного з допомогою контейнера <select>. Ширина списку оприділяється з найширшим, вказаним в тезі <option>, а також може змінюватись з допомогою стилів.', 'disabled', 'Заблокувати для доступу елемент списку.', 'selected', 'Заздалегідь встановлює певний пункт списку виділеним');
// console.log(option);
// const select = new Tag('select', 'Тег <select> дозволяє створювати елементи інтерфейсу в вигляді розкриваючого списку, а також список з одним або багаточисленним вибором, як показано дальше. Кінцевий вигляд залежить від використання атрибуту size тега <select>, якийвстановлює висоту спискуу.', 'accesskey', 'Дозволяє перейти до списку з допомогою деякого поєднання клавіш.','form', 'Зв\'язує список з формою.');
// console.log(select);

// ==============================================
//Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//info () - яка виводить всю інформацію про автомобіль
//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//changeYear (newValue) - змінює рік випуску на значення newValue
//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// const car = {
//     brand : 'Nissan',
//     model : 'Juke',
//     year : 2019,
//     type : 'crossrover',
//     speedMax: 220,
//     capacity: 1.6,
//     color : 'yellow',
//     drive: function() {
//         console.log('їдемо зі швидкістю' + this.speedMax + 'км на годину')

//     },
//     info: function(){
//         console.log(this);
//     },
//     increaseMaxSpeed: function (){
//         newSpeed=20;
// console.log('Нова швидкість - ' + (this.speedMax + newSpeed))
//     },

//     changeYear: function (){
//         newValue = 2020;
//          car.year = newValue;
//         console.log('Новий рік  випуску ' + car.year);
//     },

//     addDriver: function (driver){
//         this.driver = driver;

//     }

// }
// car.increaseMaxSpeed();
// car.changeYear();
// car.addDriver();
// car.drive();
// car.info();

// ==============================================
//
//
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(model, brand, year, speedMax, capacity){
//         this.model = model;
//         this.producer = brand;
//         this.year = year;
//         this.maxSpeed = speedMax;
//         this.engineCapacity = capacity;
//         this.drive = function (){
//         console.log('їдемо зі швидкістю' + this.maxSpeed + 'км на годину');
//         };
//         this.info = function(){
//             console.log('Інформація про автомобіль: ' +  'Виробник: ' + this.producer + 'Модель: ' + this.model+ 'Рік випуску: ' + this.year +  'Максимальна швидкість: ' + this.maxSpeed +  'Об\'єм двигуна: ' + this.engineCapacity);
//         };
//         this.increaseMaxSpeed = function (newSpeed){
//             this.maxSpeed += newSpeed;
//             console.log(this.maxSpeed);
//         };
//         this.changeYear = function (newValue){
//             this.year = newValue;
//             console.log(this.year);
//         };
//         this.addDriver = function (driver){
//             this.driver = driver;
//             console.log(this.driver);
//         }
// }
// let myCar = new Car('Juke', 'Nissan', 2019, 220, 1.6);
// myCar.info();
// myCar.drive();
// myCar.addDriver({name: 'Karpusya', age: 30});
// myCar.increaseMaxSpeed(20);
// myCar.changeYear(2020);
// console.log(myCar);


// ==============================================
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car{
//     constructor(model, brand, year, speedMax, capacity) {
//         this.model = model;
//         this.producer = brand;
//         this.year = year;
//         this.maxSpeed = speedMax;
//         this.engineCapacity = capacity;

//     }
//     drive(){
//         console.log('їдемо зі швидкістю ' + this.maxSpeed+  ' км на годину');
//     };
//     info(){
//         console.log('Інформація про автомобіль:' + ' Виробник:' + this.producer + 'Модель: ' + this.model + 'Рік випуску:' + this.year  + ' Максимальна швидкість: ' + this.maxSpeed + 'Об\'єм двигуна: ' + this.engineCapacity);
//     };
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     };
//     changeYear(newValue){
//         this.year = newValue;
//         console.log(this.year);
//     };
//     addDriver(driver){
//         this.driver = driver;
//         console.log(this.driver);
//     }
// }
// let myCar = new Car('Juke', 'Nissan', 2019, 220, 1.6);

// myCar.info();
// myCar.drive();
// myCar.addDriver({name: 'karpusya', age: 30});
// myCar.increaseMaxSpeed(20);
// myCar.changeYear(2020);
// console.log(myCar);

// ==============================================
//
//
// ==============================================
// --створити класс попелюшка з полями ім'я, вік, розмір ноги
// --cтворити 10 попелюшок , покласти їх в масив
// --cтворити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// --за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cindirella{
//     constructor(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }

// const cindirellas = [new Cindirella('Kateryna', 22, 42), new Cindirella('Khrystyna', 26, 39), new Cindirella('Nadia', 20, 38), new Cindirella('Aleksandra', 25, 38), new Cindirella('Olena', 26, 38), new Cindirella('Maryna', 26, 39), new Cindirella('Alisa', 21, 36), new Cindirella('Dina', 28, 39), new Cindirella('Sasha', 22, 37), new Cindirella('Liza', 19, 35)];
//
// class Prince {
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
// }

// const princeVolodymyr = new Prince('Volodymyr', 28, 42);
//
// for (const Cindirella of cindirellas) {
//     if (Cindirella.legSize === princeVolodymyr.shoesSize) {
//         console.log('Це туфелька попелюшки за іменем ' + Cindirella.name );
//     }
// }


// ==============================================
//
//
//
// ==============================================
// створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cindirella (name, age, legSize) {
//     this.name = name;
//     this.age = age;
//     this.legSize = legSize;
// }
//
// function Prince(name, age, shoesSize) {
//     this.name = name;
//     this.age = age;
//     this.shoesSize = shoesSize;
//     this.findCindirella = function (arr){
//         for (const girl of arr) {
//             (girl.legSize === this.shoesSize) ? console.log('Це туфелька попелюшки за іменем ' + girl.name) : null;
//         }
//     }
// }
//
// const princeVolodymyr = new Prince('Volodymyr', 28, 42);
//
// const girlsArray =  [new Cindirella('Kateryna', 22, 42), new Cindirella('Khrystyna', 26, 39), new Cindirella('Nadia', 20, 38), new Cindirella('Aleksandra', 25, 38), new Cindirella('Olena', 26, 38), new Cindirella('Maryna', 26, 39), new Cindirella('Alisa', 21, 36), new Cindirella('Dina', 28, 39), new Cindirella('Sasha', 22, 37), new Cindirella('Liza', 19, 35)];
//
// princeVolodymyr.findCindirella(girlsArray);
