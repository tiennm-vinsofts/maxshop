import React, { Component } from 'react';
import Header from '../../../components/HeaderComponent';
import Banner from '../../../components/BannerComponent';
import Footer from '../../../components/FooterComponent';
import ContentShopSingle from './ContentShopSingle';

class Cart extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <ContentShopSingle/>
                
                <Footer/>
            </div>
        );
    }
}

export default Cart;