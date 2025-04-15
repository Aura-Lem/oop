import { Animal } from "./Animal.js";

export class Pet extends Animal {
    constructor(name, furColor) {
        super(name);
        this.furColor = furColor;
        this.legsCount = 4;
        this.eyesCount = 2;
    } 

    voice() {
        const sound = (' ' + this.sound).repeat(2);
        return `${this.name}:${sound}!`;
    }

}