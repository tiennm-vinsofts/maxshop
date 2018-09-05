import React, { Component } from 'react';
import Banner from '../../components/BannerComponent';
import AboutSection from './AboutSection';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialSection';
import Clients from './Clients';

class About extends Component {
    reloadAnimation() {
        const [ head ] = document.getElementsByTagName('script');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/functions.js';
        head.appendChild(script);
      }
        componentDidMount(){
          this.reloadAnimation();
        }
    render() {
        return (
            <div>
            <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>About Us</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">About Us</li>
              </ol>
            </div>{/* Container /- */}
          </div>
                <AboutSection/>
                <TeamSection/>
                <TestimonialSection/>
                <Clients/>
            </div>
        );
    }
}

export default About;