import React, { Component } from 'react';
import logo from './logo.svg';
import sprite from './images/MH3-Icons.png';
import './App.css';

class App extends Component {
  renderBox(value, max) {
    var squares = [];
    for (var i = 0; i < max; i++) {
      squares.push({ "value": (i < value) });
    }
    return squares.map((square, index) => (<p className={square.value}></p>));
  }
  renderSkills(skills) {
      return (
        skills.map(function(item, index) {
        return (
          <div>
            <h3>{item.name}</h3>
            {this.renderBox(item.value, 3)}
          </div>
        );
      }, this)
    );
  }
  renderArmor(type, rarity, name, skills) {
    return (
    <div class="armor">
      <div class="icon">
        <i className={type + " rarity-" + rarity}></i>
        <p>{name}</p>
      </div>
      {this.renderSkills(skills)}
    </div>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h2>Popular Armor Pieces</h2>
          {this.renderArmor("helmet",8,"Dragon King Eyepatch", [{ "name":"Weakness Exploit", "value": 2 }])}
          {this.renderArmor("chest",7,"Odogaron Mail A", [ { "name": "Speed Sharpening", "value": 2 }, { "name": "Bleeding Resistance", "value": 1 } ])}
        </p>
      </div>
    );
  }
}

export default App;
