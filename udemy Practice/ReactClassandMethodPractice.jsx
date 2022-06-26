class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}
class Person extends Human{
    constructor() {
        super();
        this.name = 'Max';
    }

    printMyName() {
        console.log(this.name);
    }
}
class Homosapiens extends Person {
    constructor(){
        super();
        this.age = 19;
    }

    printAge() {
        console.log(this.age);
    }
}
const person = new Homosapiens();
person.printMyName();
person.printGender();
person.printAge();
