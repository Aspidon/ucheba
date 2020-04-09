"use strict";

let startFlag = 0,
    knopkaStart = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthsavingsValue = document.querySelector(".monthsavings-value"),
    yearsavingsValue = document.querySelector(".yearsavings-value"),

    expensesItem = document.getElementsByClassName("expenses-item"),
    buttons0 = document.getElementsByTagName("button")[0],
    buttons1 = document.getElementsByTagName("button")[1],
    buttons2 = document.getElementsByTagName("button")[2],
    rashNeob = document.querySelectorAll(".optionalexpenses-item"),
    vozmDohod = document.querySelector("#income"),
    savings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money,
    time;

knopkaStart.addEventListener('click', function () {
    startFlag = 1;
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

buttons0.addEventListener('click', function () {
    if (startFlag == 1) {
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = +expensesItem[++i].value;

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
                console.log("Все верно");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i - 1;
            }
            console.log(a);
            console.log(b);
            console.log(sum);
        }

        expensesValue.textContent = sum;
        console.log(sum);
    }
});

buttons1.addEventListener('click', function () {
    if (startFlag == 1) {
        console.log("Все верно");
        for (let i = 0; i < rashNeob.length; i++) {
            console.log(i);
            let opt = rashNeob[i].value;
            appData.optionalExpenses[i] = opt;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            console.log(opt);
        }
    }
});

// нажатие на кнопку расчитать бюджет
buttons2.addEventListener('click', function () {
    if (startFlag == 1) {
        if (appData.budget != undefined) {
            let obiyz = 0;
            if (expensesValue.textContent != null && expensesValue.textContent != ' ') {
                obiyz = expensesValue.textContent;
            }

            appData.moneyPerDay = ((appData.budget - obiyz) / 30).toFixed();
            daybudgetValue.textContent = +appData.moneyPerDay + " рублей";

            if (appData.moneyPerDay < 100) {
                console.log("Минимальное значение достатка");
                levelValue.textContent = "Минимальное значение достатка";
            } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
                console.log("Среднее значение достатка");
                levelValue.textContent = "Среднее значение достатка";
            } else if (appData.moneyPerDay > 2000) {
                console.log("Большое значение достатка");
                levelValue.textContent = "Большое значение достатка";
            }
        } else {
            daybudgetValue.textContent = "Введите ваш бюджет!";
        }
    }
});

// возможные статьи дохода
vozmDohod.addEventListener('input', function () {
    let items = vozmDohod.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

// чекбокс 
savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
    console.log(appData.savings);
});

sum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum1 = +sum.value,
            percent1 = +percent.value;

        appData.monthIncome = sum1 / 100 / 12 * percent1;
        appData.yearIncome = sum1 / 100 * percent1;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum1 = +sum.value,
            percent1 = +percent.value;

        appData.monthIncome = sum1 / 100 / 12 * percent1;
        appData.yearIncome = sum1 / 100 * percent1;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

console.log(money);
console.log(time);
console.log(appData);

console.log(knopkaStart);
console.log(budgetValue);
console.log(daybudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(incomeValue);
console.log(monthsavingsValue);
console.log(yearsavingsValue);
console.log(expensesItem);
console.log(buttons0);
console.log(buttons1);
console.log(buttons2);
console.log(rashNeob);
console.log(vozmDohod);
console.log(savings);
console.log(sum);
console.log(percent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);