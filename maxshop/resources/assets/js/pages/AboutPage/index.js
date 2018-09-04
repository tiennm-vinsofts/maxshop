import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import Footer from '../../components/FooterComponent';
import Banner from '../../components/BannerComponent';
import AboutSection from './AboutSection';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialSection';
import Clients from './Clients';

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <AboutSection/>
                <TeamSection/>
                <TestimonialSection/>
                <Clients/>
                <Footer/>
            </div>
        );
    }
}

export default About;