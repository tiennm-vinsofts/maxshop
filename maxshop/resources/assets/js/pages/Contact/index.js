import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
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