import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ContentCheckout from './ContentCheckout';
class Checkout extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <ContentCheckout/>
            </div>
        );
    }
}

export default Checkout;