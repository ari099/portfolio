import './App.css';
import anime from 'animejs';
import Home from './Home';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Page Container React Component....
 */
class Page extends Component {
  constructor(props) {
    super(props);
    this.letterColors = {
      'A': 'blue',
      'R': 'red',
      'I': 'gray'
    };
  }

  componentDidMount() {
    anime({
      targets: '.Page',
      opacity: [0, 1],
      border: `1px solid ${this.letterColors[this.props.current]}`,
      easing: 'easeInOutQuad',
      duration: 1000
    });

    anime({
      targets: '.Page-controls',
      color: this.letterColors[this.props.current],
      easing: 'easeInOutQuad',
      duration: 1000
    });
  }

  render() {
    return (
      <div className="Page">
        <FontAwesomeIcon className="Page-controls"
          icon={faTimes} onClick={this.props.closePage} />
      </div>
    );
  }
}

/**
 * Main Application React Component
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLetter: '',
      isOpen: false
    };
  }

  openPage(letter) {
    this.setState({
      currentLetter: letter,
      isOpen: true
    });
  }

  closePage() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return(
      <>
        {!(this.state.isOpen) ? <Home openPage={this.openPage.bind(this)} /> : <Page current={this.state.currentLetter} closePage={this.closePage.bind(this)} />}
      </>
    );
  }
}

export default App;
