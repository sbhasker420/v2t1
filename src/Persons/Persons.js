/*import React, { useState } from "react";

import Person from "./Person/Person";

const Persons = () => {
  const [personsDatas, setPersonsDatas] = useState({
    personsData: [
      { name: "max", age: 28 },
      { name: "manu", age: 29 },
    ],
    otherValue: "some other value1",
  });

  const [otherValueData] = useState("some other value2");
  // const [otherValueData] = useState("some other value2"); both are equal

  console.log(personsDatas);

  const switchNameHandler = (newName) => {
    console.log("i have been clicked");
    setPersonsDatas({
      personsData: [
        { name: newName, age: 280 },
        { name: "manusaket", age: 290 },
      ],
      otherValue: otherValueData,
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsDatas({
      personsData: [
        { name: event.target.value, age: 280 },
        { name: "manusaket", age: 290 },
      ],
    });
  };

  return (
    <div>
      <button onClick={() => switchNameHandler("maxmillian from handler")}>
        switch name
      </button>
      <Person
        name={personsDatas.personsData[0].name}
        age={personsDatas.personsData[0].age}
        click={() =>
          switchNameHandler("maxmillian from handler inside person component")
        }
        changed={nameChangedHandler}
      />
      <Person
        name={personsDatas.personsData[1].name}
        age={personsDatas.personsData[1].age}
      >
        this is the children of person component of Name => manu
      </Person>
    </div>
  );
};

export default Persons;
*/

import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  state = {
    personsData: [
      { name: "max", age: 28 },
      { name: "manu", age: 29 },
    ],
  };

  switchNameHandler = (newName) => {
    console.log("i have been clicked");
    this.setState({
      personsData: [
        { name: newName, age: 280 },
        { name: "manusaket", age: 290 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      personsData: [
        { name: event.target.value, age: 280 },
        { name: "manusaket", age: 290 },
      ],
    });
  };

  render() {
    const style1 = {
      border: "1px solid red",
      color: "black",
      font: "15px",
      cursor: "pointer",
    };

    return (
      <div>
        <button
          style={style1}
          onClick={this.switchNameHandler.bind(this, "maxmillian using bind")}
        >
          switch name
        </button>
        <Person
          name={this.state.personsData[0].name}
          age={this.state.personsData[0].age}
          click={this.switchNameHandler.bind(
            this,
            "maxmillian using bind from person"
          )}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.personsData[1].name}
          age={this.state.personsData[1].age}
        >
          this is the children of person component of Name => manu
        </Person>
      </div>
    );
  }
}

export default Persons;

/*
import React, { useState } from "react";

import Person from "./Person/Person";

const Persons = () => {
  const [personsDatas, setPersonsDatas] = useState({
    personsData: [
      { name: "max", age: 28 },
      { name: "manu", age: 29 },
    ],
    otherValue: "some other value1",
  });

  const [otherValueData] = useState("some other value2");
  console.log(personsDatas);

  const switchNameHandler = () => {
    console.log("Button has been clicked");
    setPersonsDatas({
      personsData: [
        { name: "maxSAKET", age: 280 },
        { name: "manuSAKET", age: 290 },
      ],
      otherValueData,
    });
  };

  return (
    <div>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsDatas.personsData[0].name}
        age={personsDatas.personsData[0].age}
      />
      <Person
        name={personsDatas.personsData[1].name}
        age={personsDatas.personsData[1].age}
      >
        children of Person component having Name = Manu
      </Person>
    </div>
  );
};

export default Persons;
*/
