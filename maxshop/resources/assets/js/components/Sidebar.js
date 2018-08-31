import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4 col-xs-12 widget-area no-right-padding">
            {/* Widget Search */}
            <aside className="widget widget_search">
              <h3 className="widget-title">Search</h3>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search You Wants. . ." />
                <span className="input-group-btn">
                  <button className="btn btn-search" title="Search" type="button"><i className="icon icon-Search" /></button>
                </span>
              </div>
            </aside>{/* Widget Search /- */}
            {/* Widget Categories */}
            <aside className="widget widget_categories">
              <h3 className="widget-title">Categories</h3>
              <ul>
                <li><a href="#" title="Beautiful Chairs">Beautiful Chairs <span>(5)</span></a></li>
                <li><a href="#" title="Creative Designs">Creative Designs <span>(6)</span></a></li>
                <li><a href="#" title="Trendy Products">Trendy Products <span>(4)</span></a></li>
                <li><a href="#" title="Interior Products">Interior Products <span>(2)</span></a></li>
                <li><a href="#" title="Popular Products">Popular Products <span>(8)</span></a></li>
                <li><a href="#" title="Casual Shirts">Casual Shirts <span>(7)</span></a></li>
              </ul>
            </aside>{/* Widget Categories /-  */}
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
            <aside className="widget widget_tags">
              <h3 className="widget-title">popular tags</h3>
              <div className="tags-box">
                <a href="#" title="Chairs">Chairs</a>
                <a href="#" title="Modern Designs">Modern Designs</a>
                <a href="#" title="Watches">Watches</a>
                <a href="#" title="Future">Future</a>
                <a href="#" title="Popular Products">Popular Products</a>
                <a href="#" title="Trendy">Trendy</a>
                <a href="#" title="Interier">Interier</a>
                <a href="#" title="Modern">Modern</a>
              </div>
            </aside>{/* Widget Tags */}
            <aside className="widget widget_tweets">
        <h3 className="widget-title">latest tweets</h3>
        {/* Main Carousel */}
        <div id="main-carousel1" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#main-carousel1" data-slide-to={0} className="active" />
            <li data-target="#main-carousel1" data-slide-to={1} />
            <li data-target="#main-carousel1" data-slide-to={2} />
          </ol>
          <div role="listbox" className="carousel-inner">
            <div className="item active">
              <h5>tweet@John max</h5>
              <p>MAX SHOP - Creative Minimal Portfolio WordPress Theme by @ifathemes</p>
              <a href="#">http://goo.gl/6CbMtH</a>
              <span>5 Hours ago</span>
            </div>
            <div className="item">
              <h5>tweet@John max</h5>
              <p>MAX SHOP - Creative Minimal Portfolio WordPress Theme by @ifathemes</p>
              <a href="#">http://goo.gl/6CbMtH</a>
              <span>5 Hours ago</span>
            </div>
            <div className="item">
              <h5>tweet@John max</h5>
              <p>MAX SHOP - Creative Minimal Portfolio WordPress Theme by @ifathemes</p>
              <a href="#">http://goo.gl/6CbMtH</a>
              <span>5 Hours ago</span>
            </div>
          </div>
        </div>
      </aside>
          </div>
        );
    }
}

export default Sidebar;