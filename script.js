// collaborated with richard, daisy, viviana, anthony, and eric


class Ninja {
        constructor (name, health=90, speed=3, strength=3){
            this.name= name;
            this.health =health;
            this.speed =speed;
            this.strength =strength
        }

sayName(){
    console.log(`THe ninja's name is ${this.name}.`);
        return;
    }
showStats(){
    console.log(`THe ninja's name is ${this.name}.`);
    console.log(`THe ninja's health is ${this.health}.`);
    console.log(`THe ninja's speed is ${this.speed}.`);
    console.log(`THe ninja's strength is ${this.strength}.`);
        return;
    }
drinkSake(){
    this.health += 10;
    console.log(`THe ninja's new health is ${this.health}. `);
        return;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
