const person = {
    name: 'Taiveyon'
};

const secondPerson = {person};

const thirdPerson = {
    ...person
};

person.name = 'Max';

console.log(secondPerson);
console.log(thirdPerson);
