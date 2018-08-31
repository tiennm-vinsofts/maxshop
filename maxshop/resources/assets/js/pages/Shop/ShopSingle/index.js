import React, { Component } from 'react';
import Header from '../../../components/Header';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
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