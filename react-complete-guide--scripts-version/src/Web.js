import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './connector';

const Web = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
          {name:"Taiveyon", age:"19"},
          {name:"Mason", age:"19"},
          {name:"Andrew", age:"24"},
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked');
    // DONT DO THIS!!:this.state.persons[0].name = 'Dave';
    setPersonsState(
      {persons: [
          {name:"Dave", age:"19"},
          {name:"Mason", age:"19"},
          {name:"Andrew", age:"24"},
        ],
     })
  }
 
      return (
        <div className="Web">
          <h1>Hi, I'm a React App</h1>
          <p>This is a paragraph</p>
          <button onClick= {() => switchNameHandler.bind('Taiveyon')}></button>
          <Person 
            name={personsState.persons[0].name} 
            age={personsState.persons[0].age}> Hobby: Soccer  </Person>
          <Person 
            name={personsState.persons[1].name} 
            age={personsState.persons[1].age}
          click={switchNameHandler} >My Hobbies: Racing </Person>
          <Person 
            name={personsState.persons[2].name} 
            age={personsState.persons[2].age}> </Person>
        </div>
      );
  // return React.createElement('div', null, 'h1', 'Hi, I\'m a React Appp!!!!');
}

export default Web;

//IF Component was used,
  //State would be able to be used(not so effective) like so
  // state = {
  //   persons: [
  //     {name:"Taiveyon", age:"19"},
  //     {name:"Mason", age:"19"},
  //     {name:"Andrew", age:"24"},
  //   ],
  //   otherState: 'some other value'
  // }

  // switchNameHandler = () => {
  //   //console.log('Was clicked');
  //   // DONT DO THIS!!:this.state.persons[0].name = 'Dave';
  //   this.setState({persons: [
  //     {name:"Dave", age:"19"},
  //     {name:"Mason", age:"19"},
  //     {name:"Andrew", age:"24"},
  //     ]
  //   } )
  // }

  // render() {