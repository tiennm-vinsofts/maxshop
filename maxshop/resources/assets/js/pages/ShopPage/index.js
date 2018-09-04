import React, { Component } from 'react';
import Banner from '../../components/BannerComponent';
import Sidebar from '../../components/SidebarComponent';
import ContentArea from './ContentArea';

class Shop extends Component {
    render() {
        return (
            <div>
            <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Shop</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Shop</li>
              </ol>
            </div>{/* Container /- */}
          </div>
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