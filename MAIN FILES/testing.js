class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Max';

    printMyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printGender();
person.printMyName();

let arr = [1, 2, 4, 5, 6];
let newArr = [...arr, 2, 5];
console.log(newArr);

let obj = {
    name: 'Kolio',
    family: 'Kolev'
}

console.log(obj)

let newObj = {...obj, number: 8901234567};

console.log(newObj)

let returnMe = name => name

console.log(returnMe('Kolio'))

import { kkk } from "./testing2";

console.log(kkk)