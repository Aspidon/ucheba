"use strict";

// Урок 1

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", "");

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}

chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

console.log(money);
console.log(time);
console.log(appData);

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " рублей");

if (appData.moneyPerDay < 100) {
    console.log("Минимальное значение достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Среднее значение достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Большое значение достатка");
}

// Урок 2

// let x = 5;
// alert( ++x );

// let proba = [ ] + false - null + true;
// console.log(proba);

// let y = 1;
// let x = y = 2;
// alert(x);

// let proba = [ ] + 1 + 2;
// console.log(proba);

// alert( "1"[0] );

// let proba = 2 && 1 && null && 0 && undefined;
// console.log(proba);

// let a = "rt",
//     b = "rds",
//     c = "gf",
//     d = "cx",
//     x = a && b,
//     z = c && d;

// if (!!x == z) {
//     alert(x);
// } else {
//     alert(z);
// };

// alert( null || 2 && 3 || 4 );

// let a = 1,
//     b = 1;

// if (a == b) {
//     alert(1);
// } else {
//     alert(2);
// };

// alert( +"Infinity" );

// if ("яв" > "яб") {
//     alert(1);
// } else {
//     alert(2);
// };

// let a = (0 || "" || 0 || undefined || true || falsе);
// console.log(a);