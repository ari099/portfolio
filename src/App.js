import './App.css';
import anime from 'animejs';
import Home from './Home';
import React, { Component } from "react";

/**
 * Navigation React Component....
 */
// class Navigation extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return(
//       <svg class="App-navigation"></svg>
//     );
//   }
// }

/**
 * Main Application React Component
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage:"home"
    };
  }

  render() {
    return(
      <Home />
    );
  }
}

export default App;
