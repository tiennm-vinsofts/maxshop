import React, { Component } from 'react';
import Header from '../../../components/HeaderComponent';
import Banner from '../../../components/BannerComponent';
import Footer from '../../../components/FooterComponent';
import ContentCheckout from './ContentCheckout';
class Checkout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <ContentCheckout/>
                <Footer/> 
            </div>
        );
    }
}

export default Checkout;