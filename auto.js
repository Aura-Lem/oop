import {Car} from './js/Car.js';

const volvo = new Car('Volvo S40', 'red', 55);
const zapas = new Car('Zapas', 'white', 35);
console.log(volvo.intro());
console.log(zapas.intro());
zapas.refill(5);
zapas.refill(15);
zapas.refill(15);
zapas.refill(1);
console.log(zapas.refill(-5));
console.log(zapas.refill(NaN));
console.log(zapas.refill('pazadais uzpilti'));
console.log(zapas);