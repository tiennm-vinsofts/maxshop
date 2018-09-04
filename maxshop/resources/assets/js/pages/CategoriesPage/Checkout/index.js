import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ContentCheckout from './ContentCheckout';
class Checkout extends Component {
    render() {
        return (
            <div>
            <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Checkout</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Checkout</li>
              </ol>
            </div>{/* Container /- */}
          </div>
                <ContentCheckout/>
            </div>
        );
    }
}

export default Checkout;