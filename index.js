// class (klasė) -> object (objektas)
// blyno receptūra -> blynas
// namo brėžinys -> namas

class Dog {
    constructor (vardas, kailioSpalva) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = 0;
        this.legsCount = 4;
        this.hasTail = true;
        this.isStanding = true;
    }

    hi() {
        return `Hi, my name is ${this.name}!`;
    }

    intro() {
        return `Hi, my name is ${this.name}, my fur is ${this.furColor} and I am ${this.age} years old.`
    }

    birthday() {
        //this.age++;
        return `Happy birthday ${this.name}! Now you are ${++this.age} years old!`;
    }

    lostTail() {
        this.hasTail = false;
    }

    lostLeg() {
        if (this.legsCount > 0) {
            this.legsCount--;
        }
    }

    changePose () {
        this.isStanding = !this.isStanding;         // keicia i priesinga reiksme (true -> false ir atvirksciai)
    }

    changeFurColor(newColor) {
        this.furColor = newColor;
        return `${this.name} has ${this.furColor} fur.`;
    }
}

const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');

console.log(brisius);
brisius.lostTail();
brisius.lostLeg();
console.log(brisius);
brisius.changePose();
console.log(brisius);

console.log(rex);
console.log(rex.name);
console.log(brisius.furColor);
console.log(rex.hi());
console.log(brisius.hi());
console.log(rex.intro());
console.log(brisius.intro());
console.log(brisius.birthday());
console.log(brisius.birthday());
console.log(rex.birthday());
console.log(brisius.changeFurColor('red'));
console.log(brisius);
