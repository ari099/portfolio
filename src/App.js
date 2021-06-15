import './App.css';
import anime from 'animejs';
import Home from './Home';
import About from './About';
import Repertoire from './Repertoire';
import Info from './Info';
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
      'A': '#06F',
      'R': 'red',
      'I': 'gray'
    };

    this.pages = {
      'A': <About />,
      'R': <Repertoire />,
      'I': <Info />
    };

    this.state = {
      current: this.props.current
    };
    this.switchPages = this.switchPages.bind(this);
  }

  componentDidMount() {
    let startPage = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 750
    });

    startPage.add({
      targets: '.Page',
      opacity: [0, 1],
      height: ['0%', '75%']
    });
    startPage.add({
      targets: '.About-page-left, .About-page-right',
      opacity: [0, 1]
    });
    startPage.add({
      targets: '.Page-mini-nav',
      opacity: [0, 1]
    });
  }

  /**
   * Switch pages from the small navigation bar at the bottom of the page
   * When the user click a circle, it will light it up and revert the previous
   * colored circle to a regular one
   */
  switchPages(letter) {
    this.setState({ current: letter });
  }

  render() {
    return (
      <div className="Page">
        <div className="Page-view">
          {this.pages[this.state.current]}
        </div>
        <FontAwesomeIcon className="Page-controls"
          icon={faTimes} onClick={this.props.closePage} />
        <svg className="Page-mini-nav">
          <circle className="Page-nav-button navA"
            cx="11.25" cy="12.5"
            onClick={() => this.switchPages('A')}
            r={(this.state.current === 'A') ? 7.5 : 5}
            fill={(this.state.current === 'A') ? this.letterColors[this.state.current] : 'black'} />
          <circle className="Page-nav-button navR"
            cx="32.5" cy="12.5"
            onClick={() => this.switchPages('R')}
            r={(this.state.current === 'R') ? 7.5 : 5}
            fill={(this.state.current === 'R') ? this.letterColors[this.state.current] : 'black'} />
          <circle className="Page-nav-button navI"
            cx="53.75" cy="12.5"
            onClick={() => this.switchPages('I')}
            r={(this.state.current === 'I') ? 7.5 : 5}
            fill={(this.state.current === 'I') ? this.letterColors[this.state.current] : 'black'} />
        </svg>
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
    let closing = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 500,
    });

    closing.add({
      targets: '.About-page-left, .About-page-right',
      opacity: [1, 0]
    });
    closing.add({
      targets: '.Page-mini-nav',
      opacity: [1, 0]
    });
    closing.add({
      targets: '.Page',
      opacity: [1, 0],
      height: ['75%', '0%'],
      complete: () => {
        this.setState({
          isOpen: false
        });
      }
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
