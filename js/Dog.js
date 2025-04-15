import { Pet } from "./Pet.js";

export class Dog extends Pet {
    constructor(name, furColor) {
        super(name, furColor);
        this.sound = 'au';
    } 
}