// Лог. оператори

// && - оператор (і)
// || - оператор (або)

// const x1 = 10;
// const x2 = 30;
// const a = 12;

// if (a < x2 && a > x1) {

// }

const _totalBalance = 120000;
const _outCash = Number.parseInt(prompt("Яку суму ви хочете зняти з балансу (до 120000):"));
const _addCash = Number.parseInt(prompt("Яку суму ви хочете покласти на баланс:"));
const _bonusPerMonth = 0.03;
const _result = (_totalBalance - _outCash + _addCash) * (1 + _bonusPerMonth * 12);
console.log(_result);