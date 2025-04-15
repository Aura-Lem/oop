import { Bird } from "./Bird.js";

export class Parrot extends Bird {
    constructor(name, feathersColor) {
        super(name, feathersColor);
    } 
    repeatWords(words) {
        return `${this.name}: '${words}'.`;
    }
}