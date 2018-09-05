import React, { Component } from 'react';
import Banner from '../../components/BannerComponent';
import Sidebar from '../../components/SidebarComponent';
import ContentArea from './ContentArea';
import SearchComponent from '../../components/SearchComponent';
import CategoriesComponent from '../../components/CategoriesComponent';
import PopulaComponent from '../../components/PopulaComponent';

class Shop extends Component {
    reloadAnimation() {
        const [ head ] = document.getElementsByTagName('script');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'js/functions.js';
        head.appendChild(script);
      }
        componentDidMount(){
          this.reloadAnimation();
        }
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
                    <div className="col-md-4 col-sm-4 col-xs-12 widget-area no-right-padding">
                     {/* Widget Search */}
                        <SearchComponent/>

                        {/* Widget Categories */}
                        <CategoriesComponent/>

                        {/* Widget Price */}
                        <aside className="widget widget_price_filter">
                            <h3 className="widget-title">filter by price</h3>
                            <div className="price-filter">
                            <div id="slider-range" />
                            <div className="price-input">									
                                <span id="amount" />
                                <span id="amount2" />
                            </div>
                            <a href="#" title="filter">Filter</a>
                            </div>
                        </aside>{/* Widget Price /- */}

                        {/* Widget Latest Post */}
                        <aside className="widget widget_latest_post">
                        <h3 className="widget-title">recent posts</h3>
                        <div className="latest-box">
                            <div className="post-box">
                            <a href="#"><img src="images/latest-post-1.jpg" alt="Post" /></a>
                            <h5><a href="#" title="need max shop.">I Phone 6s sales on</a></h5>
                            <div className="star-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                            </div>
                            <span className="price"><del>$955</del>$789</span>
                            </div>
                        </div>
                        <div className="latest-box">
                            <div className="post-box">
                            <a href="#"><img src="images/latest-post-2.jpg" alt="Post" /></a>
                            <h5><a href="#" title="need max shop.">mens casual footwear</a></h5>
                            <div className="star-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                            </div>
                            <span className="price"><del>$185</del>$120</span>
                            </div>
                        </div>
                        <div className="latest-box">
                            <div className="post-box">
                            <a href="#"><img src="images/latest-post-3.jpg" alt="Post" /></a>
                            <h5><a href="#" title="need max shop.">running shoes</a></h5>
                            <div className="star-rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star-o" />
                            </div>
                            <span className="price"><del>$150</del>$85</span>
                            </div>
                        </div>
                        </aside>{/* Widget Latest Post /- */}

                        {/* Widget Tags */}
                        <PopulaComponent/>
                    </div>
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