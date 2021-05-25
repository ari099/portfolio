import './Home.css';
import anime from 'animejs';
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.letterMouseOver = this.letterMouseOver.bind(this);
    this.letterMouseOut = this.letterMouseOut.bind(this);
  }

  letterMouseOver(letter) {
    let colors = {
      'A': '#CCEFFF',
      'R': '#FDD',
      'I': '#E6E6E6'
    };

    anime({
      targets: `.${letter}-top`,
      fill: ['#FFF', colors[letter]],
      easing: 'easeInOutQuad',
      duration: 62.5
    });

    anime({
      targets: `.${letter}-text`,
      opacity: 1,
      easing: 'easeInOutExpo',
      duration: 125
    });
  };

  letterMouseOut(letter) {
    anime({
      targets: `.${letter}-top`,
      fill: '#FFF',
      easing: 'easeInOutQuad',
      duration: 62.5
    });

    anime({
      targets: `.${letter}-text`,
      opacity: 0,
      easing: 'easeInOutExpo',
      duration: 125
    });
  };

  letterMouseDown(letter) {
    let positions = {
      'A': 'm 85.878084,170.58396 -84.4120028,79.96026 0.497529,39.24477 75.3423578,0.11573 0.497012,-39.82318 -24.053935,2.6e-4 45.550232,-45.16518 -0.498041,45.16492 H 88.680964 l 0.498049,39.94099 73.857047,-0.29944 0.49805,-40.94499 h -19.22432 l -0.49701,-44.01326 h 19.22328 l 0.49857,-34.18088 z',
      'R': 'm 173.75012,170.58371 0.49764,34.18602 20.81527,0.19844 -0.49816,43.80973 h -21.21111 l 0.49764,41.24554 73.03017,0.001 0.49868,-41.24606 -14.87713,5.1e-4 v -7.81761 h 40.82024 v 7.81761 l -15.19235,-5.1e-4 0.49764,41.24606 65.22651,-5.2e-4 0.49765,-41.24606 h -15.46468 l -0.49766,-78.19419 z m 58.753,33.71318 h 40.82024 v 7.4719 h -40.82024 z',
      'I': 'm 336.40612,170.58396 h 79.14534 l -0.4979,34.54482 h -16.17734 l 0.49869,44.3293 h 16.17655 l -0.4979,40.65173 h -78.28833 l -0.49715,-40.65173 h 15.4056 l 0.60532,-44.3293 h -15.37549 z'
    };

    anime({
      targets: `.${letter}-top`,
      d: positions[letter],
      easing: 'easeInOutQuad',
      duration: 62.5
    });
  }

  letterMouseUp(letter) {
    let positions = {
      'A': 'm 85.878084,159.58396 -84.4120028,79.96026 0.497529,39.24477 75.3423578,0.11573 0.497012,-39.82318 -24.053935,2.6e-4 45.550232,-45.16518 -0.498041,45.16492 H 88.680964 l 0.498049,39.94099 73.857047,-0.29944 0.49805,-40.94499 h -19.22432 l -0.49701,-44.01326 h 19.22328 l 0.49857,-34.18088 z',
      'R': 'm 173.75012,159.58371 0.49764,34.18602 20.81527,0.19844 -0.49816,43.80973 h -21.21111 l 0.49764,41.24554 73.03017,0.001 0.49868,-41.24606 -14.87713,5.1e-4 v -7.81761 h 40.82024 v 7.81761 l -15.19235,-5.1e-4 0.49764,41.24606 65.22651,-5.2e-4 0.49765,-41.24606 h -15.46468 l -0.49766,-78.19419 z m 58.753,33.71318 h 40.82024 v 7.4719 h -40.82024 z',
      'I': 'm 336.40612,159.58396 h 79.14534 l -0.4979,34.54482 h -16.17734 l 0.49869,44.3293 h 16.17655 l -0.4979,40.65173 h -78.28833 l -0.49715,-40.65173 h 15.4056 l 0.60532,-44.3293 h -15.37549 z'
    };

    anime({
      targets: `.${letter}-top`,
      d: positions[letter],
      easing: 'easeInOutQuad',
      duration: 62.5
    });
  }

  componentDidMount() {
      anime({
        targets: '.App-letters',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1000
      });
  }

  render() {
    return(
      <svg className="Home-letters" height={340} width={417}>
          <path style={{fill: '#06F', stroke: '#06F'}}
             d="m 85.878084,175.45897 -84.4120028,79.96026 0.497529,39.24477 75.3423578,0.11573 0.497012,-39.82318 -24.053935,2.6e-4 45.550232,-45.16518 -0.498041,45.16492 H 88.680964 l 0.498049,39.94099 73.857047,-0.29944 0.49805,-40.94499 h -19.22432 l -0.49701,-44.01326 h 19.22328 l 0.49857,-34.18088 z"
             className="A-shadow" />
          <path style={{fill: 'red', stroke: 'red'}}
             className="R-shadow"
             d="m 173.75012,175.45872 0.49764,34.18602 20.81527,0.19844 -0.49816,43.80973 h -21.21111 l 0.49764,41.24554 73.03017,10e-4 0.49868,-41.24606 -14.87713,5.1e-4 v -7.81761 h 40.82024 v 7.81761 l -15.19235,-5.1e-4 0.49764,41.24606 65.22651,-5.2e-4 0.49765,-41.24606 h -15.46468 l -0.49766,-78.19419 z m 58.753,33.71318 h 40.82024 v 7.4719 h -40.82024 z" />
          <path style={{fill: 'gray', stroke: 'gray'}}
             d="m 336.40612,175.45897 h 79.14534 l -0.4979,34.54482 h -16.17734 l 0.49869,44.3293 h 16.17655 l -0.4979,40.65173 h -78.28833 l -0.49715,-40.65173 h 15.4056 l 0.60532,-44.3293 h -15.37549 z"
             className="I-shadow" />
          <path style={{fill: 'white', stroke: '#06F'}}
             d="m 85.878084,159.58396 -84.4120028,79.96026 0.497529,39.24477 75.3423578,0.11573 0.497012,-39.82318 -24.053935,2.6e-4 45.550232,-45.16518 -0.498041,45.16492 H 88.680964 l 0.498049,39.94099 73.857047,-0.29944 0.49805,-40.94499 h -19.22432 l -0.49701,-44.01326 h 19.22328 l 0.49857,-34.18088 z"
             className="A-top"
             onMouseDown={() => this.letterMouseDown('A')}
             onMouseUp={() => this.letterMouseUp('A')}
             onMouseOver={() => this.letterMouseOver('A')}
             onMouseLeave={() => this.letterMouseOut('A')}/>
          <path style={{fill: 'white', stroke: 'red'}}
             className="R-top"
             onMouseDown={() => this.letterMouseDown('R')}
             onMouseUp={() => this.letterMouseUp('R')}
             onMouseOver={() => this.letterMouseOver('R')}
             onMouseLeave={() => this.letterMouseOut('R')}
             d="m 173.75012,159.58371 0.49764,34.18602 20.81527,0.19844 -0.49816,43.80973 h -21.21111 l 0.49764,41.24554 73.03017,0.001 0.49868,-41.24606 -14.87713,5.1e-4 v -7.81761 h 40.82024 v 7.81761 l -15.19235,-5.1e-4 0.49764,41.24606 65.22651,-5.2e-4 0.49765,-41.24606 h -15.46468 l -0.49766,-78.19419 z m 58.753,33.71318 h 40.82024 v 7.4719 h -40.82024 z" />
          <path style={{fill: 'white', stroke: 'gray'}}
             d="m 336.40612,159.58396 h 79.14534 l -0.4979,34.54482 h -16.17734 l 0.49869,44.3293 h 16.17655 l -0.4979,40.65173 h -78.28833 l -0.49715,-40.65173 h 15.4056 l 0.60532,-44.3293 h -15.37549 z"
             className="I-top"
             onMouseDown={() => this.letterMouseDown('I')}
             onMouseUp={() => this.letterMouseUp('I')}
             onMouseOver={() => this.letterMouseOver('I')}
             onMouseLeave={() => this.letterMouseOut('I')} />
          <text x="47.661922" y="334.3566"
             fill="#06F" fontFamily="Detroit DEMO" fontSize="smaller"
             style={{opacity: 0}}
             className="A-text">About</text>
          <text x="179.95363" y="334.3566"
             fill="red" fontFamily="Detroit DEMO" fontSize="smaller"
             style={{opacity: 0}}
             className="R-text">Repertoire</text>
          <text x="349.28687" y="334.3566"
             fill="gray" fontFamily="Detroit DEMO" fontSize="smaller"
             style={{opacity: 0}}
             className="I-text">Info</text>
      </svg>
    );
  }
}

export default Home;
