import { Animal } from "./Animal.js";

export class Bird extends Animal {
    constructor(name, feathersColor) {
        super(name);
        this.feathersColor = feathersColor;
        this.flying = true;
    } 
}