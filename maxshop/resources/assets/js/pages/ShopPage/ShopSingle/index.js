import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ContentShopSingle from './ContentShopSingle';

class Cart extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <ContentShopSingle/>
            </div>
        );
    }
}

export default Cart;