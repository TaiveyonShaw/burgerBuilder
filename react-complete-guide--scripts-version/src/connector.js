import React from 'react'

// Alternative #1
// function person() {
//     return <h2>Bananas</h2>
// };

//Alternative #2
// var person = function() {
//     return <h2>Bananas</h2>
// };

const person = (props) => {
    return (
    <div>
        <p onClick>{props.click}I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person;