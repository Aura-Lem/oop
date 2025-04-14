/*
    intro() - apibudina masinos modeli ir spalva.
    drive(km) - nurodzius norima nuvaziuoti atstuma yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu, tai ribiniu atveju tiesiog sustoja ir masina issijungia.
    engineOn() - ijungia varikli, jei yra kuro ir jei yra isjungtas.
    engineOff() - isjungia varikli, jei yra ijungtas.
    refill() - uzpilti degalu, bet ne daugiau nei telpa ir jei variklis yra isjungtas. 
*/

export class Car {
    constructor(model, color, tankMax, fuelConsumption) {
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.fuelConsumption = fuelConsumption;
        this.tank = 0;
        this.engineIsOn = false;
        this.engineIsOff = false;
        this.carMoving = true; 
    }

    intro() {
        return `This is ${this.color} ${this.model}.`;
    }

    refill(volume) {
        if (this.engineIsOn) {
            return 'Error: to refill a tank, you must turn off engine first.';
        }

        if (typeof volume !== 'number' || !isFinite(volume)) {
            return 'Error: Only real numbers allowed.';
        }

        if ( volume < 0) {
            return `Refill with ${volume} litres is not allowed.`;
        }

        if (this.tankMax - this.tank >= volume) {
            this.tank += volume;
        }  else {
            this.tank = this.tankMax;
        }  
    }

    engineOn() {
        if (this.tank < 0) {
            return 'Tank is empty';
        } else if (this.engineIsOn === true) {
            return 'Car is already On.';
        } else {
            return this.engineIsOn = true;
        }
    }

    drive(km) {
        let fuelConsumed = (km * this.fuelConsumption) / 100;
        if (fuelConsumed >= this.tank) {
            this.carMoving = false;
            this.engineIsOn = false;
            this.engineIsOff = true;
            this.tank = 0;
        } else if (fuelConsumed < this.tank) {
            this.tank = this.tank - fuelConsumed.toFixed(1);
        }
    }
} 