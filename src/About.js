import ari from './ari.jpg';
import './About.css';
import anime from 'animejs';
import React, { Component } from "react";

/**
 * About Page React Component
 */
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // ...
  }

  render() {
    return (
      <>
        <div className="About-profile-top-background"></div>
        <img className="About-profile-pic" src={ari} />
      </>
    );
  }
}

export default About;
