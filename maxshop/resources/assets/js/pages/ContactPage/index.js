import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import Footer from '../../components/FooterComponent';
import Banner from '../../components/BannerComponent';
import ContentContact from './ContentContact';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <ContentContact/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;