import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
              <div className="container-fluid no-padding menu-block">
              {/* Container */}
              <div className="container">
                {/* nav */}
                <nav className="navbar navbar-default ow-navigation">
                  <div className="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a href="index.html" className="navbar-brand">Max <span>shop</span></a>
                  </div>
                  <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav">
                      <li className="active dropdown">
                        <a href="#" title="Home" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                        {/* <i class="ddl-switch fa fa-angle-down"></i>
                                        <ul class="dropdown-menu">				
                                            <li><a href="index.html" title="home 1">home 1</a></li>
                                            <li><a href="index2.html" title="home 2">home 2</a></li>
                                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <a href="#" title="Home" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Categories </a>
                        <i className="ddl-switch fa fa-angle-down" />
                        <ul className="dropdown-menu">				
                          <li><a href="cart.html" title="Cart">Cart</a></li>
                          <li><a href="checkout.html" title="Checkout">Checkout</a></li>
                          <li><a href="404.html" title={404}>404</a></li>
                        </ul>
                      </li>
                      <li><a href="#product-section" title="Products">Products</a></li>
                      <li className="dropdown">
                        <a href="shop.html" title="Shop" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                        <i className="ddl-switch fa fa-angle-down" />
                        <ul className="dropdown-menu">				
                          <li><a href="shop-single.html" title="Shop Single">Shop Single</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="blog.html" title="Blog" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                        <i className="ddl-switch fa fa-angle-down" />
                        <ul className="dropdown-menu">				
                          <li><a href="blog-post.html" title="Blog Post">Blog Post</a></li>
                        </ul>
                      </li>
                      <li><a href="about.html" title="About Us">About Us</a></li>
                      <li><a href="contact-us.html" title="Contact Us">Contact Us</a></li>
                    </ul>
                  </div>{/*/.nav-collapse */}
                </nav>{/* nav /- */}
              </div>{/* Container /- */}
            </div>
        );
    }
}

export default Navbar;