import * as fromCustomer from './customer';

let employee = new fromCustomer.Employee("John", 18, 1800);

console.log(employee.welcome());
console.log(fromCustomer.persons);
fromCustomer.welcome();