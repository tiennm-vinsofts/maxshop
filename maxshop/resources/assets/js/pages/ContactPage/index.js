import React, { Component } from 'react';
import Banner from '../../components/BannerComponent';
import ContentContact from './ContentContact';

class Contact extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <ContentContact/>
            </div>
        );
    }
}

export default Contact;