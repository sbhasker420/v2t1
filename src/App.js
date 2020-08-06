import React, { Component } from "react";

import Counter from "./Counter/Counter";

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Counter />
      </div>
    );
  }
}

export default App;

/* // working with list and conditionals assignment

import React, { Component } from "react";
import "./App.css";

import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    // string is character array but it needs to be split("") , to let map() function work on it..

    return (
      <div className="App">
        <h1>Heading inside App component</h1>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
*/
/*
// understanding the base features and syntax

import React, { useState } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

// import Persons from "./Persons/Persons";

function App() {
  const [userName, setUserName] = useState({
    username: "saket",
  });

  const nameChangedHandler = (event) => {
    setUserName({
      username: event.target.value,
    });
  };

  return (
    <div className="App">
      <h1>Heading inside App component</h1>
      <UserInput changed={nameChangedHandler} username={userName.username} />
      <UserOutput username={userName.username} />
      <UserOutput />
      <UserOutput />
    </div>
  );
}

export default App;
*/
