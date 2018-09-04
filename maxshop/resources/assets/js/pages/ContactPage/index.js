import React, { Component } from 'react';
import Banner from '../../components/BannerComponent';
import ContentContact from './ContentContact';

class Contact extends Component {
    render() {
        return (
            <div>
            <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Contact Us</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Contact</li>
              </ol>
            </div>{/* Container /- */}
          </div>
                <ContentContact/>
            </div>
        );
    }
}

export default Contact;