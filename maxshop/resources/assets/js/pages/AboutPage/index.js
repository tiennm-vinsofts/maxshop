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
                <Banner/>
                <AboutSection/>
                <TeamSection/>
                <TestimonialSection/>
                <Clients/>
            </div>
        );
    }
}

export default About;