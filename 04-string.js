// const _msg = "В цьому рядку 24 символа";
// console.log(_msg.length);

// const roomNumber = 32;
// const userName = "Noname Nosurname";
// const hotname = "Charizard";

// console.log(`Гість ${userName} проживає в готелі ${hotname} в номері ${roomNumber}`);

// let _btnName = "send";
// _btnName = _btnName.toUpperCase();
// console.log(_btnName);

// // includes() - пошук елементів

// const BlackListWords1 = "спам";
// const BlackListWords2 = "розпродаж";
// const BlackListWords3 = "Олег";

// let _str1 = "Привіт, я принц Олег, зараз діє розпродаж!";
// let _str2 = "Це повідомлення зроблено із допомогою спам";
// let _str3 = "Компанія Abbibas";

// console.log(_str1.includes(BlackListWords3));

// 

let _salary = prompt("Яка у вас зарплата?");
const _bonus = 0.15;
const _taxes = 0.19;
_salary = Number.parseFloat(_salary); 
const _result = (_salary + (_salary * _bonus)) * (1 - _taxes);
console.log(_result);