//створити масив та вивести його в консоль:
//- з 5 числових значень;
//- з 5 стічкових значень;
//- з 5 значень стрічкового, числового та булевого типу.

// let array1 = [1, 2, 3, 4, 5];

// console.log(array1);

// let array2 = ['one', 'two', 'three', 'four', 'five'];

// console.log(array2);

// let array3 = [6, 7, 'seven', true, false];

// console.log(array3);

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array4 = [];
// array4[0] = 1;
// array4[1] = 'two';
// array4[2] = true;
// array4[3] = false;
// array4[4] = 'five';
// console.log(array4);

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//  document.write('<div>Щось непонятне з дівками. Дівки розмножуються. Ладно, насправді я все розумію, просто хвилинка сміху</div>');
// }

//  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Щось понятне з дівками ' + (i + 1) + '</div>');
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<div>Тре щось тут написати while</div>');
//     i++
// }

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<div>Пишу шось' + (i + 1) + ' циклу while</div>');
//     i++
// }

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numberelements= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numberelements.length; i++) {
//     console.log(numberelements[i]);
// }

// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let stringselements = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let i = 0; i < stringselements.length; i++) {
//     console.log(stringselements[i]);
// }

//  Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let anyelement1 = ['1', 2, 3, true, false, undefined, null, {}, [], 'smth'];
// let i = 0;
// while (i < anyelement1.length) {
//     console.log(anyelement1[i]);
//     i++
// }

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let anyelement2 = ['1', 2, 3, true, false, 1, 'zero', 'something', 'everything', false];
// for (let i = 0; i < anyelement2.length; i++) {
//     if (typeof anyelement2 [i] === "boolean"){
//         console.log(anyelement2 [i]);
//     }
// }

//  Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let anyelement3= ['1', 2, 3, true, false, 1, 'null', 'bla bla', 'wow', false];
// for (let i = 0; i < anyelement3.length; i++) {
//     if (typeof anyelement3[i] === "number"){
//         console.log(anyelement3[i]);
//     }
// }

// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let anyelement4 = ['1', 2, 3, true, false, 1, 'null', 'bla bla', 'wow', false];
// for (let i = 0; i < anyelement4.length; i++) {
//     if (typeof anyelement4[i] === "string"){
//         console.log(anyelement4[i]);
//     }
// }


// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = 1;
// array[1] = true;
// array[2] = 2;
// array[3] = false;
// array[4] = 'something interesting';
// array[5] = ['funny', 'funny'];
// array[6] = {name: 'karpusya'};
// array[7] = null;
// array[8] = undefined;
// array[9] = 'nothing';
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++){
//     console.log('iteration ' + (i + 1));
//     document.write('iteration ' + (i + 1) + '<br>');
// }

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++){
//     console.log('iteration ' + (i + 1));
//     document.write('iteration ' + (i + 1) + '<br>');
// }

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 200; i += 2){
//     console.log('iteration ' + (i + 1));
//     document.write('iteration ' + (i + 1) + '<br>');
// }


// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0) {
//         console.log('iteration ' + (i));
//         document.write('iteration ' + (i) + '<br>');
//     }
// }


// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if (i % 2 === 1) {
//         console.log('iteration ' + (i));
//         document.write('iteration ' + (i) + '<br>');
//     }
// }

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// let minutes = 0;
// let seconds = 0;
// while (minutes < 2) {
//     while (seconds < 60) {
//         if (minutes < 10) {
//             minutes = '0' + minutes;
//         }
//         if (seconds < 10) {
//             seconds = '0' + seconds;
//         }
//         let clock = minutes + ':' + seconds;
//         console.log(clock);
//         minutes = parseInt(minutes);
//         seconds = parseInt(seconds);
//         seconds++
//     }
//     seconds = 0;
//     minutes++
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// while (hours < 3) {
//     while (minutes < 60) {
//         while (seconds < 60) {
//             if (hours < 10) {
//                 hours = '0' + hours;
//             }
//             if (minutes < 10) {
//                 minutes = '0' + minutes;
//             }
//             if (seconds < 10) {
//                 seconds = '0' + seconds;
//             }
//             let clock = hours + ':' + minutes + ':' + seconds;
//             console.log(clock);
//             hours = parseInt(hours);
//             minutes = parseInt(minutes);
//             seconds = parseInt(seconds);
//             seconds++
//         }
//         seconds = 0;
//         minutes++
//         if (hours === 2 && minutes === 21){
//             minutes = 60;
//         }
//         if(hours === 2 && minutes === 20){
//             seconds = 61;
//         }
//     }
//     minutes = 0;
//     hours++
// }
