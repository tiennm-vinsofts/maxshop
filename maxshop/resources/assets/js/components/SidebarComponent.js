import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import CategoriesComponent from './CategoriesComponent';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-4 col-xs-12 widget-area no-right-padding">
            {/* Widget Search */}
            <SearchComponent/>
            {/* Widget Categories */}
            <CategoriesComponent/>
          
            {/* Widget Latest Post */}
            <aside className="widget widget_latest_post">
              <h3 className="widget-title">recent posts</h3>
              <div className="latest-box">
                <div className="post-box">
                  <a href="#"><img src="images/latest-post-1.jpg" alt="Post" /></a>
                  <h5><a href="#" title="need max shop.">need max shop</a></h5>
                  <span><a className="calendar" href="#"><i className="fa fa-calendar-o" />July 20, 2016</a><a href="#"><i className="fa fa-heart-o" /> 224 Likes</a><a href="#">Posted By Max</a></span>
                </div>
              </div>
              <div className="latest-box">
                <div className="post-box">
                  <a href="#"><img src="images/latest-post-2.jpg" alt="Post" /></a>
                  <h5><a href="#" title="Commenly use products">Commenly use products</a></h5>
                  <span><a className="calendar" href="#"><i className="fa fa-calendar-o" />June 18, 2016</a><a href="#"><i className="fa fa-heart-o" /> 224 Likes</a><a href="#">Posted By Max</a></span>
                </div>
              </div>
              <div className="latest-box">
                <div className="post-box">
                  <a href="#"><img src="images/latest-post-3.jpg" alt="Post" /></a>
                  <h5><a href="#" title="chairs are beautiful">chairs are beautiful</a></h5>
                  <span><a className="calendar" href="#"><i className="fa fa-calendar-o" />May 23, 2016</a><a href="#"><i className="fa fa-heart-o" /> 224 Likes</a><a href="#">Posted By Max</a></span>
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

             {/* Widget Tags */}
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