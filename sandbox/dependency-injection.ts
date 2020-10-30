abstract class Engine {}

class DieselEngine extends Engine {}

class PetrolEngine extends Engine {}

abstract class Gearbox {}

class AutomaticGearbox extends Gearbox {}

class ManualGearbox extends Gearbox {}

class Car {
    gearbox: Gearbox;
    engine: Engine;

    constructor() {
        this.gearbox = new AutomaticGearbox();
        this.engine = new PetrolEngine();
    }
}