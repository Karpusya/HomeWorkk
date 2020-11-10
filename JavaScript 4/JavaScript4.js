// створити функцію яка виводить масив

// let array1 = [1, 2, 3, 4, 5, 6, 7];
// function showArray(arrray){
//     console.log(array1);
// }
// showArray(array1);

// створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function random(lengh, min, max){

//     let array2 = [];

//     for(let i = 0; i < lengh; i++){
//         array2.push(Math.floor(Math.random() * (max - min) + min));
//     };
//     return array2;
// };

// const random_array2 = random(10, 10, 100);
//
// function arr_function(arr){
//     console.log(arr);
//     for(let arg of arr){
//         console.log(arg);
//     };
// };
// arr_function(random_array2)

//створити функцію яка приймає три числа та виводить та повертає найменше.

// function returnMinValue(one, two, three){
//     let result1 = Math.min(one, two, three);
//     console.log(result1);
//     return result1
// }
// returnMinValue(20, 10, 30);

// створити функцію яка приймає три числа та виводить та повертає найбільше.

// function returnMaxValue(one, two, three){
//     let result2 = Math.max(one, two, three);
//     console.log(result2);
//     return result2
// }
// returnMaxValue(20, 10, 30);

//  створити функцію яка приймає будь-яку кількість чисел, повертає найменше, а виводить найбільше

// function returnMinShowMax(){
//     console.log(arguments);
//     let args = [];
//     for (let i = 0; i < arguments.length; i++){
//         args.push(arguments[i]);
//     }
//     console.log(Math.max(...args));
//     return Math.min(...args);
// }
// console.log(returnMinShowMax(20, 4, 6, 8, 10, 12, 14, 20, 100, 30, 60));

//  створити функцію яка виводить масив
// let array3 = [1, 2, 3, 4, 5, 6, 7];
// function showArray(array3){
//     console.log(array3);
// }
// showArray(array3);

// створити функцію яка повертає найбільше число з масиву
// let array4 = [20, 60, 44, 90, 4];
// function retMaxValue(array) {
//     let maxValue = 'чисел не знайдено(';
//     for (let i = 0; i<array.length; i++) {
//          if (typeof array[i] === "number") maxValue = array[i];
//     }
//     for (let i = 0; i<array.length; i++){
//         if (maxValue < array[i]) maxValue = array[i];
//     }
//     return maxValue;
// }
// console.log(retMaxValue(array4));

//створити функцію яка повертає найменьше число з масиву
// let array5 = [20, 60, 44, 90, 4];
// function retMaxValue(array) {
//     let maxValue = 'чисел не знайдено(';
//     for (let i = 0; i<array.length; i++) {
//         if (typeof array[i] === "number"){
//             maxValue = array[i];
//         }
//     }
//     for (let i = 0; i<array.length; i++){
//         if (maxValue > array[i]) maxValue = array[i];
//     }
//     return maxValue;
// }
// console.log(retMaxValue(array5));

//створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let array6 = [20, 60, 44, 90, 4];
// function sum(array){
//     let result = 0;
//     for (const elem of array) {
//         result += elem;
//     }
//     return result;
// }
// console.log(sum(array6));

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array7 = [20, 60, 44, 90, 4];
// function sumMiddle(array){
//     let result = 0;
//     for (const elem of array) {
//         result += elem;
//     }
//     result = result / array.length;
//     return result;
// }
// console.log(sumMiddle(array7));

// cтворити функцію яка приймає масив будь яких об'єктів, та повертає значення кількості об'єктів в масиві
// let array8 = [{name: 'karpusya', age: 30}, {age: 30}, {location: 'lviv', cat: false}, {dog: true}, 898, 'щось таке', [24,4]];
// function array8Length(array){
//     let result = 0;
//     for (const element of array) {
//         if (typeof element === 'object' && !Array.isArray(element)){
//             result++;
//         }
//     }
//     return result
// }
// console.log(array8Length(array8));

//cтворити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let array9 = [{name: 'karpusya', age: 30}, {age: 30}, {location: 'lviv', cat: false}, {dog: true, location: 'lviv'}, 7, 'щось таке'];
// function objectKeysCount(array){
//     let result = 0;
//     for (const obj of array) {
//         if (typeof obj === 'object'){
//             result += Object.keys(obj).length;
//         }
//
//     }
//     return result;
// }
// console.log(objectKeysCount(array9));


// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// const arrayOne = [1, 2, 3, 4];
// const arrayTwo = [2, 3, 4, 5];
// function summ(array1, array2) {
//     const result = [];
//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i] + array2[i])
//     }
//     return result;
// }
// console.log(summ(arrayOne, arrayTwo));

// *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array10 = [10,20,30,40,50,60,70];
// let position = 3;
// function replaceElem(array, i){
//     let arrayItem1 = array[i];
//     let arrayItem2 = array[i+1];
//     array[i] = arrayItem2;
//     array[i+1] = arrayItem1;
//     return array;
//
// }
// console.log(replaceElem(array10, position));

//  *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let array11 = [0,0,1,0,0,0,0,0,1,0,0,0];
// function sortZero(array) {
//     let i = 0;
//     while (i < array11.length){
//         if (array11.indexOf(0) !== -1){
//             let zero = array11.splice(array11.indexOf(0), 1);
//             array11.push(zero[0]);
//         }
//         i++
//     }
//     return array;
// }
// console.log(sortZero(array11));


// Створити функцію яка :
// Додає в боді блок з текстом "Hello owu"

// function sayHelloInBody(){
//     document.write('Hello OWU <br>');
// }
// sayHelloInBody();

// Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// const element = 'h1';
// const text = 'Щось таке всяке';
// function addText(element, text){
//     document.body.innerHTML += `<${element}>${text}</${element}>`;
// }
// addText(element, text);
// addText('p', text);
// addText('span', text);

// приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let arr_cars = [
//     {name: "Mycar", model: 'Nissan', power: 180, inSale: false, color: "black"},
//     {name: "Mycar", model: 'Renault', power: 220, inSale: true, color: "yellow"},
//     {name: "Mycar", model: 'Toyota', power: 190, inSale: true, color: "blue"},
//     {name: "Mycar", model: 'Fiat', power: 140, inSale: false, color: "green" },
//     {name: "Mycar", model: 'Volkswagen', power: 190, inSale: true, color: "white"},
//     {name: "Mycar", model: 'BMW', power: 260, inSale: false, color: "red"},
//     {name: "Mycar", model: 'Ford', power: 179, inSale: false, color: "brown"}
// ];

// function cars_fc(array, div_cars){
//     let box = document.createElement(div_cars);
//
//     for(index of array){
//         let car = document.createElement("div");
//         car.innerHTML = `Name:  ${index.name}  model:  ${index.model}  year  ${index.graduation_year}  power: ${index.power}
//         color:  ${index.color}`;
//         box.appendChild(car);
//     };
//
//     document.body.appendChild(box);
// };

// cars_fc(arr_cars, "div");

// приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// let cars2 = [
//     {name: "Mycar", model: 'Nissan', power: 180, inSale: false, color: "black"},
//     {name: "Mycar",model: 'Renault', power: 220, inSale: true, color: "yellow"},
//     {name: "Mycar",model: 'Toyota', power: 190, inSale: true, color: "blue"},
//     {name: "Mycar",model: 'Fiat', power: 140, inSale: false, color: "green" },
//     {name: "Mycar",model: 'Volkswagen', power: 190, inSale: true, color: "white"},
//     {name: "Mycar",model: 'BMW', power: 260, inSale: false, color: "red"},
//     {name: "Mycar",model: 'Ford', power: 179, inSale: false, color: "brown"}
// ];
//
// function cars_fc(array, div_cars){
//     let box2 = document.createElement(div_cars);
//     for(index of array){
//         let car = document.createElement("div");
//         car.innerHTML = `Name:  ${index.name}  model:  ${index.model}  Selling  ${index.inSale}  power: ${index.power}
//         color:  ${index.color}`;
//         box2.appendChild(car);
//
//         let car_name = document.createElement("div");
//         let car_model = document.createElement("div");
//         let car_inSale = document.createElement("div");
//         let car_power = document.createElement("div");
//         let car_color = document.createElement("div");
//
//         car_name.innerText = `name: ${index.name}`;
//         car_model.innerText = `model: ${index.model}`;
//         car_inSale.innerText = `inSale: ${index.inSale}`;
//         car_power.innerText = `power: ${index.power}`;
//         car_color.innerText = `color: ${index.color}`;
//
//         car.appendChild(car_name);
//         car.appendChild(car_model);
//         car.appendChild(car_inSale);
//         car.appendChild(car_power);
//         car.appendChild(car_color);
//     };
//     document.body.appendChild(box2);
// };
// cars_fc(cars2, "div");


// (на основі минулого ДЗ)
// ** функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//           let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:


// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function mergeTwoObjects(array1,array2){
//     let users = JSON.parse(JSON.stringify(array1));
//     let cities = JSON.parse(JSON.stringify(array2));
//     for(const city of cities){
//         for(const user of users){
//             if(city.user_id===user.id){
//                 user.adress = city;
//             }
//         }
//     }
//     return users;
// }
// const mergedArray = mergeTwoObjects(usersWithId,citiesWithId);
// console.log(mergedArray);


//
//
// // ***- беремо завдання з правилами з укроку №3 :
// // Та робимо це функцією.При цьому правила отримувати через аргумент.
// // "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// // При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// function createBlocks(rulesArray) {
//     const wrapper = document.createElement('div');
//     wrapper.setAttribute('id', 'wrap');
//     for (let i = 0; i < rulesArray.length; i++) {
//         const rule = document.createElement('div');
//         rule.setAttribute('class', `rules rule${i+1}`);
//         const titleBox = document.createElement('h2');
//         titleBox.innerHTML += rulesArray[i].title;
//         rule.appendChild(titleBox);
//         const bodyBox = document.createElement('p');
//         bodyBox.innerHTML += rulesArray[i].body;
//         rule.appendChild(bodyBox);
//
//         wrapper.appendChild(rule);
//     }
//     document.body.appendChild(wrapper);
// }
// createBlocks(rules);