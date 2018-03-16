import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  renderBox(value, max) {
    var squares = [];
    for (var i = 0; i < max; i++) {
      squares.push({ "value": (i < value) });
    }
    return squares.map((square, index) => <p data-value={square.value} className="box"></p>);
  }
  renderSkills(skills) {
    var skillInfo = [];
    skillInfo["Blast Resistance"] = { "max": 3 };
    skillInfo["Bleeding Resistance"] = { "max": 3 };
    skillInfo["Blight Resistance"] = { "max": 3 };
    skillInfo["Flinch Free"] = { "max": 3 };
    skillInfo["Guard"] = { "max": 5 };
    skillInfo["Speed Sharpening"] = { "max": 3 };
    skillInfo["Special Ammo Boost"] = { "max": 1 };
    skillInfo["Weakness Exploit"] = { "max": 3 };

      return (
        skills.map(function(item, index) {
        return (
          <div className="skills row">
            <div className="col-sm-2">
              <p>{item.name}</p>
            </div>
            <div className="col-sm-10 skill-display">
              {this.renderBox(item.value, skillInfo[item.name] !== undefined ? skillInfo[item.name].max : 0)}
            </div>
          </div>
        );
      }, this)
  );
  }
  renderArmor(type, rarity, name, skills) {
    return (
    <div class="armor container">
      <div class="icon row">
        <div className="col-sm-1 center armor-check">
          <input type="checkbox" />
        </div>
        <div className="col-sm-1">
          <i className={type + " rarity-" + rarity}></i>
        </div>
        <div className="col-sm-10">
          <h3>{name}</h3>
        </div>
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
        </header>
        <div className="App-main container">
          <div className="row">
            <h2>Popular Armor Pieces</h2>
          </div>
          <div className="armor-list">
            {this.renderArmor("helmet",8,"Dragon King Eyepatch", [{ "name":"Weakness Exploit", "value": 2 }])}
            {this.renderArmor("chest",7,"Odogaron Mail A", [ { "name": "Speed Sharpening", "value": 2 }, { "name": "Bleeding Resistance", "value": 1 } ])}
            {this.renderArmor("arms",7,"Uragaan Vambraces B", [ { "name": "Guard", "value": 1 } ])}
            {this.renderArmor("waist",8,"Xeno'jiiva Spine A", [ { "name": "Blight Resistance", "value": 2 }, { "name": "Special Ammo Boost", "value": 1 } ])}
            {this.renderArmor("legs",5,"Gastodon Alpha Armor A", [ { "name": "Flinch Free", "value": 1 }, { "name": "Blast Resistance", "value": 1 } ])}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
