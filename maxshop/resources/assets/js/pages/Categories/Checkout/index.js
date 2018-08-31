import React, { Component } from 'react';
import Header from '../../../components/Header';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
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