
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    rash1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    oboy1 = +prompt("Во сколько обойдется?", ""),
    rash2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    oboy2 = +prompt("Во сколько обойдется?", ""),
    appData = {
        budget: money,
        timeData: time,
        expenses: {
            rash1: oboy1,
            rash2: oboy2
        },
        optionalExpenses: {},
        income: [],
        savings: false
    };

console.log(money);
console.log(time);
console.log(appData);

alert("Ваш бюджет на 1 день: " + (money/30) + " рублей");