let p = 5;

if (p > 10) {
    console.log(p);
}

// for in w JS do iterowania po obiekcie a nie po tablicy!

let numbers = [7, 8, 9];

for (let n of numbers) {
    console.log(n);
}

for (let n in numbers) { // taka składnia wypisuje indeksy!!!
    console.log(n);
}

// enumeracje

enum CustomerType {
    Standard = 10,
    Premium,
    VIP
}

function welcome(name: string, customerType: CustomerType) {
    if (customerType === CustomerType.VIP) {
        console.log(`Welcome my Lord ${name}`);
    } else {
        console.log(`Welcome ${name}`);
    }
}

// Enumeracje w JS pracują na liczbach!
console.log(`CustomerType type is ${CustomerType.Premium}`);
console.log(`CustomerType type is ${CustomerType[CustomerType.Premium]}`);