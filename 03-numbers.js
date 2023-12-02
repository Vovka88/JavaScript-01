// Парс числа Number.parseInt() 
// та Number.parseFloat()

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);

let elementHeight = "150.54px"
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);

const base = 2;
const power = 5;

const result = Math.pow(base, power);   

// let _pro = prompt("Введіть число:");
// let _pow = prompt("Введіть степінь:");
// let _result = Number.parseFloat(_pro) ** Number.parseFloat(_pow);
// console.log(_result);

const max = 80;
const min = 10;
let _rand = Math.random() * (max - min) + min;
console.log(_rand);