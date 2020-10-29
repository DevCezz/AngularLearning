class Animal {
    constructor(private name: string) {}

    roar() {
        setTimeout(function() {
            console.log(this.name);
        }, 500);
    }

    ear() {
        setTimeout(() => {
            console.log(this.name);
        }, 500);
    }
}

// Lepiej używać arrow function niż funkcji anonimowych ze względu na słowo this
const animal = new Animal("Lion");
// const to stała, nie da się jej przypisać innej wartości
animal.roar();
animal.ear();

function condition(x: number) {
    if (x > 5) {
        var a = 5;
    }

    return a;
}

// dlatego var się nie używa w TS, bo nie jest on przypisany do bloku wywołania a do całej funkcji
console.log(`var: ${condition(3)}`);