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
import { Parrot } from "./js/Parrot.js";
import { Hummingbird } from "./js/Hummingbird.js";
import { Eagle } from "./js/Eagle.js";

const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');
const keksas = new Hamster('Keksas', 'brown');

const antanas = new Shark('Antanas');
const lydeka = new Pike('Lydeka');

const papuga = new Parrot('Papuga');
const kolibris = new Hummingbird('Kolibris');
const erelis = new Eagle('Erelis');

console.log(rex.hi());
console.log(rainis.hi());
console.log(keksas.hi());
console.log(lydeka.grantWish('lots of cash'));
console.log(keksas.hi());
console.log(antanas.hi());
console.log(papuga.hi());
console.log(kolibris.hi());
console.log(erelis.hi());
console.log(papuga.repeatWords('Laba diena'));

