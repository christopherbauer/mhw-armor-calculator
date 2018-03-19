import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const API_HOST = 'http://localhost:3001'; //temporary
class ArmorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      armors: props.armors
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ armors: nextProps.armors });
  }
  renderBox(value, max) {
    var squares = [];
    for (var i = 0; i < max; i++) {
      squares.push({ "value": (i < value) });
    }
    return squares.map((square, index) => <p key={index} data-value={square.value} className="box"></p>);
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
          <div key="{item.name}" className="skills row">
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
  renderArmor(key, type, rarity, name, description, skills) {
    return (
    <div key={key} className="armor container">
      <div className="icon row">
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
      {this.renderSkills([{ "name":"Weakness Exploit", "value": 2 }])}
    </div>
    );
  }
  render() {
    const listItems = this.state.armors.map((armor) => {
      return this.renderArmor(armor.armorId, armor.armorTypeId, armor.rarityId, armor.name, armor.description)
    });
    return (
      <div className="armor-list">
        {listItems}
      </div>      
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      armors: Array(0).fill(null)
    };
  }
  componentDidMount() {
    fetch(API_HOST+"/armors")
    .then(response => response.json())
    .then(json => {
      this.setState({ armors: json });
    });
  };
  
  render() {
    const armorList = this.state.armors;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-main container">
          <div className="row">
            <h2>Popular Armor Pieces</h2>
          </div>
          <ArmorList armors={armorList} />
        </div>
      </div>
    );
  }
}

export default App;
