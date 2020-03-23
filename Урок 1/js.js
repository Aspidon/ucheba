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
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " рублей");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальное значение достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Среднее значение достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Большое значение достатка");
        }
    },
    checkSaving: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            while (a == "" || a == null) {
                a = prompt("Статья необязательных расходов?");
            }
            optionalExpenses.i = a;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");
        while (items == "" || items == null || typeof (items) != "string") {
            items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может чтото еще?"));
        appData.income.sort();

        appData.income.forEach(function (i1, i2, i3) {
            i2++
            console.log(i2 + ". " + i1 + "\n");
        });
    }
}

console.log(money);
console.log(time);
console.log(appData);

// Урок 3

let optionalExpenses = {};


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