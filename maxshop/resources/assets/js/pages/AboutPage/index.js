import React, { Component } from 'react';
import Banner from '../../components/BannerComponent';
import AboutSection from './AboutSection';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialSection';
import Clients from './Clients';

class About extends Component {
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