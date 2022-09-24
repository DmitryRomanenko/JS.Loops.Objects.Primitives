//Завдання №1.
// let i = 3;
// while (i) {
//   alert(i--);
// }
// Последнее значение, которое выведет этот код будет 1.
// Цикл остановит работу, т.к 0 - false

//Завдання №2.
// let A = -8;
// let B = -10;
// let C = 10;

// if (A < B && B < C) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }
// console.log(A, B, C);

//Завдання №3
// let A = -33;
// let B = -100;
// let C = -10;
// if ((A < B && B < C) || (A > B && B > C)) {
//   A *= 2;
//   B *= 2;
//   C *= 2;
// } else {
//   A = -A;
//   B = -B;
//   C = -C;
// }
// console.log(A, B, C);

//Завдання №4
// let A = 1;
// let B = 5;
// let C = -3;
// A = A < 0 ? -A : A;
// B = C < 0 ? -C : A;
// C = C < 0 ? -C : A;

// let distanceB = B - A;
// let distanceC = C - A;
// let min =
//   distanceB < distanceC
//     ? console.log(`точка B, расстояние ${distanceB}`)
//     : console.log(`точка C, расстояние ${distanceC}`);

//Завдання №5
// let x = 5;
// let y = 1;

// if (x === 0 && y === 0) {
//   console.log(0);
// } else if (x != 0 && y === 0) {
//   console.log(1);
// } else if (x === 0 && y != 0) {
//   console.log(2);
// } else {
//   console.log(3);
// }

//Завдання №6
// let x = 4;
// let y = -1;

// if (x > 0 && y > 0) {
//   console.log(1);
// } else if (x < 0 && y > 0) {
//   console.log(2);
// } else if (x < 0 && y < 0) {
//   console.log(3);
// } else if (x > 0 && y < 0) {
//   console.log(4);
// }

//Завдання №7
// let x_pointA = 5;
// let y_pointA = 10;

// let x_pointB;
// let y_pointB;

// let x_pointC = 10;
// let y_pointC = 2;

// let x_pointD = 5;
// let y_pointD = 2;

// if (!x_pointA && !y_pointA) {
//   x_pointA = x_pointD;
//   y_pointA = y_pointB;
// } else if (!x_pointB && !y_pointB) {
//   x_pointB = x_pointC;
//   y_pointB = y_pointA;
// } else if (!x_pointC && !y_pointC) {
//   x_pointC = x_pointB;
//   y_pointC = y_pointD;
// } else if (!x_pointD && !y_pointD) {
//   x_pointD = x_pointA;
//   y_pointD = y_pointC;
// }

// console.log(`
// A( x: ${x_pointA} y: ${y_pointA}),
// B( x: ${x_pointB} y: ${y_pointB}),
// C( x: ${x_pointC} y: ${y_pointC}),
// D( x: ${x_pointD} y: ${y_pointD}),
// `);

//Завдання №8
// let year = 50;
// let days = 0;

// for (let i = 0; i < year; i++) {
//   if (i % 4 != 0 || (i % 100 === 0 && i % 400 != 0)) {
//     days += 365;
//   } else {
//     days += 366;
//   }
// }

//Завдання №9
// let num = 0;
// if (num > 0 && num % 2 === 0) {
//   console.log('позитивне парне число');
// } else if (num % 2 != 0) {
//   console.log('позитивне непарне число');
// } else if (num < 0 && num % 2 === 0) {
//   console.log('негативне парне число');
// } else if (num < 0 && num % 2 != 0) {
//   console.log('негативне непарне число');
// } else if (num === 0) {
//   console.log('нульове число');
// }

//Завдання №10
// let num = -100;
// let numType =
//   num.toString().length < 2 ? 'однозначне' : num.toString().length < 3 ? 'двозначне' : 'тризначне';

// if (num % 2 === 0) {
//   console.log(`парне ${numType} число`);
// } else if (num % 2 != 0) {
//   console.log(`непарне ${numType} число`);
// } else if (num === 0) {
//   console.log('нульове число');
// }

//Завдання №11
// Префіксний варіант ++i:
// let i = 0;
// while (++i < 5) alert(i);

// Постфіксний варіант i++
// let i = 0;
// while (i++ < 5) alert(i);

// Оба варианта выведут разный ответ.

// В первом цикле префиксная форма не только увеличивает значение переменной,
// но и сразу возращает новое значение, которое мы сразу же используем.
// Условие 1 < 5

// Во втором цикле постфиксная  форма только увеличивает значение переменной, но не возвращает его сразу же.
// Условие 0 < 5, но в alert уже 1

// В связи с этим первый цикл выводит alert 1 - 4, а второй цикл 1 - 5

//Завдання №12
// for (let i = 0; i < 5; i++) alert(i);
// for (let i = 0; i < 5; ++i) alert(i);

// Выводят одинаковые значения 0-5

// В первой итерации i равен 0. После выполнения тела цикла первый for увеличивает i и i не возращает сразу новое значение.
// Второй for увеличивает i и i сразу возращает новое значение, но это никак не влияет на работу цикла.
// В начале второй итерации срабатывает условие i < 5 и i в обоих случаях идентичны.

// Завдання №13
// for (let i = 2; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Завдання №14
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Завдання №15
// for (;;) {
//   let number = prompt('Введите число больше 100');
//   if (+number > 100) {
//     break;
//   } else if (!number) {
//     break;
//   } else if (isNaN(+number)) {
//     alert('Не число');
//   }
// }

// Завдання №16
// let isRegular;
// for (let i = 2; i < 10; i++) {
//   isRegular = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isRegular = false;
//       break;
//     }
//   }
//   if (isRegular) {
//     console.log(i);
//   }
// }

// Завдання №17
// let a = prompt('');
// let b = prompt('');
// let sum = Math.round((+a + +b) / 2);

// Завдання №18
// let a = +prompt('');
// alert(a ** 2);

// Завдання №19
// let a = +prompt('');
// let b = +prompt('');
// let c = +prompt('');

// let max = a > b ? (a > c ? a : c) : b > c ? b : c;
// let min = a < b ? (a < c ? a : c) : b < c ? b : c;
// alert(max - min);

// Завдання №20
// let num = +prompt('');
// if (num % 2 === 0) {
//   alert('парное');
// } else {
//   alert('не парноe');
// }

// Завдання №21
// let a = 225;
// let sum = 0;
// for (let i = 0; i < String(a).length; i++) {
//   sum = sum + +String(a)[i];
// }
// alert(sum);
// alert(String(a).length);

// Завдання №22
// const answer = +prompt('1 - Сантиметры в дюймы; 2 - Дюймы в сантиметры');
// if (answer === 1) {
//   let num = +prompt('Введите сантиметры');
//   alert(Math.round(num / 2.54));
// } else if (answer === 2) {
//   let num = +prompt('Введите дюймы');
//   alert(Math.round(num * 2.54));
// }

// Завдання №23
// let questions = [
//   'Как называют звезду, которая указала волхвам место рождения Христа? \n 1 Вифлеемская 2 Алькафрах \n 3 Алькараб 4 Далим',
//   'Какое астрономическое явление жители Земли могут наблюдать один раз в 76 лет? \n 1 Рождение звезды 2 Комета Галлея \n  3 Тройное затмение на Юпитере 4 Гигантская звездная колыбель',
//   'В какую одежду принято плакать, чтобы вызвать сочувствие? \n 1 В платок 2 В рубашку \n 3 В жилетку 4 В свитер',
// ];
// let answers = [1, 2, 3];

// for (let i = 0; i < questions.length; i++) {
//   let userAnswer = prompt(questions[i]);
//   if (+userAnswer === answers[i]) {
//     alert('Правильно!');
//   } else if (!userAnswer) {
//     alert('Вы вышли из игры');
//     break;
//   } else if (isNaN(+userAnswer)) {
//     alert('Введите число');
//     i--;
//   } else {
//     alert('К сожалению, это неправильный ответ');
//     break;
//   }
// }

// Завдання №24
// let number = +prompt('');
// let sum = 0;
// let mult = 1;

// if (number % 2 === 0) {
//   for (let i = 0; i < String(number).length; i++) {
//     sum += +String(number)[i];
//   }
//   alert(sum);
// } else {
//   for (let i = 0; i < String(number).length; i++) {
//     mult *= +String(number)[i];
//   }
//   alert(mult);
// }

// Завдання №25
// let a = +prompt('сторона a');
// let b = +prompt('сторона b');
// let c = +prompt('сторона с');
// const max = a > b ? (a > c ? a : c) : b > c ? b : c;
// if ((max === a && a < c + b) || (max === b && b < c + a) || (max === c && c < a + b)) {
//   alert('Такой треугольник можно построить');
// } else {
//   alert('Такой треугольник нельзя построить');
// }

// Завдання №26
// let x = +prompt();
// let y = +prompt();
// let r = 10;

// let h = Math.sqrt(x ** 2 + y ** 2);

// if (h < r) {
//   alert('принадлежит');
// } else {
//   alert('не принадлежит');
// }

// Завдання №27
// let user = {
//   name: 'John',
//   surname: 'Smith',
// };
// user.name = 'Pete';
// delete user.name;

// Завдання №28
// const user = {
//   name: 'John',
// };
// user.name = 'Pete';
// Это работает. Мы можем менять свойства объекта, но не можем менять ссылку на объект, т.к она объвлена через const

// Завдання №29
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// Завдання №30
// const obj = {
//   num: 10,
//   num2: 15,
// };

// const multiplyNumeric = (obj) => {
//   for (key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
// };
// multiplyNumeric(obj);
