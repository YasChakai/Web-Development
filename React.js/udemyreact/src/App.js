import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput.js/UserOutput';
import UserInput from './components/UserInput.js/UserInput';

class App extends Component {
  state = {
     username: 'Yassin' }
  
  
    switchNameHandler = (event) => {

    this.setState ({
        username: event.target.value 

    })
   

    }
  


  render() {
    return (
      <div className="App">
        <ol>
          
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol> 
        <UserInput  change={this.switchNameHandler} huidigeNaam={this.state.username} />
        <UserOutput username="Sayf" />
        <UserOutput username={this.state.username}  />

        <UserOutput username={this.state.username}/>
      

      </div>
    );
  }
}

export default App;
