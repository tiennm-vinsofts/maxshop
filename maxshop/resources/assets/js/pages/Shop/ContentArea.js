import React, { Component } from 'react';

class ContentArea extends Component {
    render() {
        return (
            <div className="col-md-8 col-sm-7 col-xs-12 content-area product-section2 no-left-padding">
            {/* Products */}
            <ul className="products">
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-10.jpg" alt="Product" />
                  <h5>Stylish Chair</h5>
                  <span className="price"><del>$200</del>$139</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-11.jpg" alt="Product" />
                  <h5>men's casual shoes</h5>
                  <span className="price"><del>$200</del>$119</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-12.jpg" alt="Product" />
                  <h5>sun glass</h5>
                  <span className="price"><del>$150</del>$85</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-13.jpg" alt="Product" />
                  <h5>Stylish Chair</h5>
                  <span className="price"><del>$380</del>$259</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-14.jpg" alt="Product" />
                  <h5>latest headphone</h5>
                  <span className="price"><del>$900</del>$759</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-15.jpg" alt="Product" />
                  <h5>men's jackets</h5>
                  <span className="price"><del>$350</del>$249</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-16.jpg" alt="Product" />
                  <h5>Model x12 computer</h5>
                  <span className="price"><del>$255</del>$139</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
              {/* Product */}
              <li className="product">
                <a href="#">
                  <img src="images/product-17.jpg" alt="Product" />
                  <h5>Stylish headset</h5>
                  <span className="price"><del>$85</del>$39</span>
                </a>
                <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                <div className="wishlist-box">
                  <a href="#"><i className="fa fa-arrows-alt" /></a>
                  <a href="#"><i className="fa fa-heart-o" /></a>
                  <a href="#"><i className="fa fa-search" /></a>
                </div>
              </li>{/* Product /- */}
            </ul>{/* Products /- */}
          </div>
        );
    }
}

export default ContentArea;