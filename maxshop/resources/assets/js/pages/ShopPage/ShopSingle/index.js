import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ContentShopSingle from './ContentShopSingle';

class Cart extends Component {
    render() {
        return (
            <div>
            <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Shop Single</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Shop</li>
              </ol>
            </div>{/* Container /- */}
          </div>
                <ContentShopSingle/>
            </div>
        );
    }
}

export default Cart;