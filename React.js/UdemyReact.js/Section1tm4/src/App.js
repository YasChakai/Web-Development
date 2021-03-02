import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';



class App extends Component {
 
state = {
  persons: [
    {name: 'Max', age: 20},
    {name: 'Sayf', age: 50},
    {name: 'Yassin', age:30}
    ]
  
}
switchNameHandler = () => {
  this.setState({persons:[
    {name: 'Max', age: 20},
    {name: 'Sayf', age: 10},
    {name: 'Yassin', age:30}
    ]})
    
   }
  render() {

  return (
    <div className="App">
     <h1>Hi am a react app</h1>
      <button onClick={this.switchNameHandler} >Switch Name</button>
     <Person
      Name={this.state.persons[0].name} 
      Age={this.state.persons[0].age}click={this.switchNameHandler} >My hobby is racing</Person>
     <Person 
     Name={this.state.persons[1].name} 
     Age={this.state.persons[1].age} click={this.switchNameHandler}>My hobby is waterpolo</Person>
     <Person
      Name={this.state.persons[2].name}
       Age={this.state.persons[2].age}
       click={this.switchNameHandler} >My hobby is football</Person>
     
    </div>
  );
}
}
export default App;