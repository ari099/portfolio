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
        <div className="About-page-left">
          <img className="About-profile-pic" src={ari} /><br />
          <h3 className="About-heading">Ariel Lorenzo</h3>
          <p className="About-text">Full-Stack Web Developer</p>
        </div>
        <div className="About-page-right">
        </div>
      </>
    );
  }
}

export default About;
