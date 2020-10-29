// Interfejs opisuje kształt obiektu
interface Patient {
    id: number;
    illness: string;
}

let patient: Patient = {
    id: 10023,
    illness: "Cold"
}

// Klasa również opisuje kształt obiektu, ale może także jego zachowania
class Client {
    id: number;
    purchase: string;

    constructor(id: number, purchase: string) {
        this.id = id;
        this.purchase = purchase;
    }

    buy() {
        console.log(`Buy ${this.purchase} by client ${this.id}`);
    }

    isToy() {
        if (this.purchase === "toy") {
            return true;
        } else {
            return false;
        }
    }
}

let client = new Client(10, "toy");

console.log(client);
client.buy();

console.log(client.isToy())

// Interfejs poza schematem jest także tym co znamy z Javy
interface CanTalk {
    talk(): string;
}

class Person implements CanTalk {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    talk(): string {
        return `Hello everyone!`;
    }

    welcome() {
        return `Hello ${this.name}, aged ${this.age}`;
    }

    isAdult() {
        if (this.age >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

class Manager extends Person {

    // Modyfikator w konstruktorze zezwala na usunięcie deklracji oraz przypisania pola
    constructor(name: string, age: number, protected salary: number) {
        super(name, age);
    }

    welcome() {
        return `Good morning ${this.name}, aged ${this.age}`;
    }
}

let manager = new Manager("John", 21, 4500);
console.log(manager.isAdult());
console.log(manager.welcome());

let john: Person = new Manager("John", 45, 3000);
console.log(john.welcome());

manager.name = "Tadzik";
console.log(manager.welcome());