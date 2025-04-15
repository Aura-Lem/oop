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
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Hamster } from "./js/Hamster.js";

const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');
const keksas = new Hamster('Keksas', 'brown');

console.log(rex.hi());
console.log(rainis.hi());
console.log(keksas.hi());

