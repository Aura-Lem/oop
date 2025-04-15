/*
Animal:
    Pet:
       - Dog
       - Cat
       - Hamster
    Bird:
       - Parrot
       - Hummingbird
       - Eagle
    Fish:
       - Shark
       - Dolphin
       - Tuna
       - Pike
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Hamster } from "./js/Hamster.js";
import { Shark } from "./js/Shark.js";
import { Pike } from "./js/Pike.js";

const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');
const keksas = new Hamster('Keksas', 'brown');

const antanas = new Shark('Antanas');
const lydeka = new Pike('Lydeka');

console.log(rex.hi());
console.log(rainis.hi());
console.log(keksas.hi());
console.log(lydeka.grantWish('lots of cash'));
console.log(keksas.hi());
console.log(antanas.hi());

