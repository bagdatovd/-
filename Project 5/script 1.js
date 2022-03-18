"use strict";

//1 task
let tC = 0;
let tF = 0;

tC = Number(prompt("Введите температуру в градусах по Цельсию: "));
tF = (9/5)*tC +32;
alert("Температура в градусах по Фаренгейту: " + String(tF));


//2 task
let admin;
let userName;

userName = "Vasiliy";
admin = userName;
console.log(admin);

//3 task

let result = 10 + 10 + "10";
console.log(result);

result = 10 + "10" + 10;
console.log(result)

result = 10 + 10 + + "10";
console.log(result);

result = 10 / -"";
console.log(result);

result = 10 / +"2,5";
console.log(result);