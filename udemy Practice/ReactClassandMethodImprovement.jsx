class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}
class theName {
    name = 'Taiveyon';

    printMyName = () => {
        console.log(this.name);
    }
}
class Homosapiens extends Human {
    age = 19;

    printAge = () => {
        console.log(this.age);
    }
}
const person = new Homosapiens();
const name = new theName();
name.printMyName();
person.printGender();
person.printAge();
