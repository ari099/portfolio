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
          <img className="About-profile-pic" src={ari} />
        </div>
        <div className="About-page-right">
          <div className="About-page-content">
            <p>I am a full-stack developer with about 3 years of experience in the field. I have worked mostly with educational institutes and collaborations with other developers and designers.</p>
            <p>I try my best to keep track of the changing trends in web and mobile development to always stay current.</p>
          </div>
        </div>
      </>
    );
  }
}

export default About;
