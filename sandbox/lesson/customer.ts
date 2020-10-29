import { Log, LogClass } from './decorators';

export class Person {
    constructor(protected name: string, private age: number) {}

    welcome() {
        return `Hello from ${this.name}, age ${this.age}`;
    }
}

@LogClass("info")
export class Employee extends Person {
    constructor(name: string, age: number, private salary: number) {
        super(name, age);
    }

    // dekorator to coś takiego jak adnotacja w Javie
    @Log()
    welcome() {
        return `Hello from employee ${this.name}, salary ${this.salary}`;
    }
}

export let persons = [
    new Person("Jane", 40),
    new Person("Rupert", 32),
    new Person("Tobby", 3),
]

export function welcome() {
    console.log("welcome from customer.ts");
}