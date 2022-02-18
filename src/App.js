import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() { // Run before any methods
    super()   // 'this' gets bound to component in react's default methods e.g. componentDidMount, render
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({'monsters': users}))
  }

  // Must be called with this.handleChange
  // However, calling this.handleChange does NOT set the context INSIDE
  // handleChange
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value }) // 'this' is undefined
  // }

  // Arrow function using Lexical Scoping to bind "this" to the place
  // where the function was originally defined.
  
  // Rule of thumb: use arrow functions on any class methods you define yourself
  handleChange = (e) => {
    this.setState({ searchField: e.target.value }) // 'this' is undefined
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monstors Rollodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
