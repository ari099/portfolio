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
    this.state = {
      rightTxt: ""
    };
    this.profileText = "I am a full-stack developer with about 3 years of experience in the field. I have worked mostly with educational institutes and collaborations with other developers and designers. I try my best to keep track of the changing trends in web and mobile development to always stay current";
  }

  componentDidMount() {
    anime({
      targets: '.About-cursor',
      opacity: [0, 1, 0],
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    });

    let pos = 0;
    anime.timeline({
      targets: '.About-page-right-text',
      easing: 'easeInOutQuad',
      update: () => {
        if(pos !== this.profileText.length) {
          let pgTxt = document.getElementsByClassName('About-page-right-text')[0];
          pgTxt.innerHTML = [pgTxt.innerHTML.slice(0, pos), this.profileText[pos], pgTxt.innerHTML.slice(pos)].join('')
          pos++;
        }
      },
      loop: true
    });
  }

  render() {
    return (
      <>
        <div className="About-page-left">
          <img className="About-profile-pic" src={ari} /><br />
          <h3 className="About-heading">Ariel Lorenzo<span className="About-cursor">_</span></h3>
          <p className="About-text">Full-Stack Web Developer</p>
        </div>
        <div className="About-page-right">
          <p className="About-page-right-text"><span className="About-cursor">_</span></p>
        </div>
      </>
    );
  }
}

export default About;
