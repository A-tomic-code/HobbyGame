import { Person } from "./Person";
import { Profesion } from "./Profesion";

let juan = new Person('Juan', 'esp', Profesion.manager, 5);
let menchu = new Person('Menchu', 'esp', Profesion.developer, 7);
let diego = new Person('Diego', 'esp', Profesion.tester, 2);
let pilar = new Person("Pilar", "esp", Profesion.manager, 9);

console.log(pilar.equals(menchu));
console.log(pilar.equals(pilar));
console.log('------------------');
console.log(diego.toString());
console.log("------------------");
juan.print()