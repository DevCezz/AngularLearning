console.log("Hello world!");

let x: number = 3;
let y: boolean;
y = true;
let z: string = "napis";

console.log(x, y, z);

let xs: number[] = [1, 2, 3];
console.log(xs.length);

let ys: Array<number> = [1, 2, 3];
ys[0] = 4;
console.log(ys);

let zs = [4, 5, 6, ...xs, 7, 8, 9];
console.log(zs);

let g = "aaa";
let gg = 'aaa';
let ggg = `Twoja liczba to = ${x}`;
console.log(ggg);
console.log(`Tablica - ${xs[1] + 5}, ${zs[0]}`);

function welcomeAgeOptional(name: string, age?: number): string {
    return `Welcome ${name}`;
}

function welcomeAgeDefault(name: string, age: number = 25): string {
    return `Welcome ${name}, aged ${age}`;
}

function welcomeNames(...names: string[]): string {
    return `Welcome ${names.join(", ")}`;
}

console.log(welcomeAgeOptional("Jane", 20));
console.log(welcomeAgeDefault("Jane"));
console.log(welcomeNames("Jane", "Carl", "Joana"));

console.log([ "Hally", "Berry" ].map(welcomeAgeDefault));

console.log([ 2, 4, 5, 8].map(function (number: number) {
    return `${number} apples`;
}));

console.log([ 2, 4, 5, 8].map(number => `${number} apples`));

// Obiekty

interface Customer { // przepis na nowy typ!
    name: string;
    age?: number;
    address: Address;
}

interface Address {
    street: string;
    city: string;
}

function welcomeCustomer(customer: Customer): string {
    return `Welcome ${customer.name}`
}

console.log(welcomeCustomer({
    name: "John",
    address: {
        street: "Karmazynowa",
        city: "Warszawa"
    }
}));