import React, { Component } from 'react';
import Banner from '../../components/BannerComponent';
import Sidebar from '../../components/SidebarComponent';
import ContentArea from './ContentArea';

class Shop extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className="product-section product-section1 product-section2 container-fluid no-padding">
                {/* Container */}
                <div className="container">
                    <div className="row">
                    {/* Widget Area */}
                    <Sidebar/>
                    
                    {/* Content Area */}
                    <ContentArea/>
                    <nav className="ow-pagination">
                        <ul className="pager">
                        <li className="number"><a href="#">4</a></li>
                        <li className="load-more"><a href="#">Load More</a></li>
                        <li className="previous"><a href="#"><i className="fa fa-angle-right" /></a></li>
                        <li className="next"><a href="#"><i className="fa fa-angle-left" /></a></li>
                        </ul>
                    </nav>
                    </div>
                </div>{/* Container /- */}
                </div>
            </div>
        );
    }
}

export default Shop;