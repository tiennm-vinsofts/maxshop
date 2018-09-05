import React, { Component } from 'react';
import { Link} from 'react-router-dom';

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
                    <Link to="/" className="navbar-brand">Max <span>shop</span></Link>
                  </div>
                  <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav">
                      <li className="active dropdown">
                        <a href="/" title="Home" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                        {/* <i class="ddl-switch fa fa-angle-down"></i>
                                        <ul class="dropdown-menu">
                                            <li><a href="index.html" title="home 1">home 1</a></li>
                                            <li><a href="index2.html" title="home 2">home 2</a></li>
                                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <Link to="#" title="Home" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Categories </Link>
                        <i className="ddl-switch fa fa-angle-down" />
                        <ul className="dropdown-menu">
                          <li><Link to="/cart" title="Cart">Cart</Link></li>
                          <li><Link to="/checkout" title="Checkout">Checkout</Link></li>
                          <li><Link to="/error" title={404}>404</Link></li>
                        </ul>
                      </li>
                      <li><a href="#product-section" title="Products">Products</a></li>
                      <li className="dropdown">
                        <Link to="/shop" title="Shop" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Shop</Link>
                        <i className="ddl-switch fa fa-angle-down" />
                        <ul className="dropdown-menu">
                          <li><Link to="/single" title="Shop Single">Shop Single</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="/blog" title="Blog" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                        <i className="ddl-switch fa fa-angle-down" />
                        <ul className="dropdown-menu">
                          <li><Link to="/blog-post" title="Blog Post">Blog Post</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/about" title="About Us">About Us</Link></li>
                      <li><Link to="/contact" title="Contact Us">Contact Us</Link></li>
                    </ul>
                  </div>{/*/.nav-collapse */}
                </nav>{/* nav /- */}
              </div>{/* Container /- */}
            </div>
        );
    }
}

export default Navbar;
