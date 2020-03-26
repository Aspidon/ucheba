let spisok = document.querySelectorAll(".menu-item"),
    spisok2 = document.querySelector(".menu");

//spisok.replaceChild(spisok[2], spisok[1]);

//let i = spisok.sort();

spisok2.appendChild(spisok[2]);
spisok2.appendChild(spisok[1]);
spisok2.appendChild(spisok[3]);

let elem5 = document.createElement("li");
elem5.classList.add("menu-item");
elem5.innerHTML = "Пятый элемент";

spisok2.appendChild(elem5);

let spisok3 = document.querySelectorAll(".menu-item");

console.log(spisok);
console.log(spisok2);
console.log(spisok3);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

let titl = document.querySelector("#title");
titl.innerHTML = "Мы продаем только подлинную технику Apple";

/* let column = document.querySelectorAll(".column"),
    column2 = document.querySelector(".column");

console.log(column);
console.log(column2);

column2.removeChild(column[1]); */

let column = document.querySelector(".adv"),
    column2 = document.querySelectorAll(".column");

console.log(column);
console.log(column2);

column2[1].removeChild(column);

let polzText = prompt("", ""),
    prom = document.querySelector("#prompt");

prom.innerHTML = polzText;
prom.textContent = polzText;