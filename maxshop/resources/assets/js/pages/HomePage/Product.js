import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            urlproduct:config.urlapi+'products',
            page: 1,
            data: [],
        }

    }

    updateState(tien) {

        if(tien==1){
            if(this.state.data.last_page==this.state.page){return;
            }
            this.state.page++;
        }else{
            if(1==this.state.page){return;
            }
            this.state.page--;
        }
        this.state.urlproduct = config.urlapi+'products?page='+this.state.page;
        this.getData();
    }
    getData() {
        axios.get(this.state.urlproduct)
            .then(response => {
                this.setState({
                    products: response.data.data.data,
                    data:response.data
                });

            })
    }
    componentDidMount() {
        this.getData();
        
    }

  render() {
    return (
        <div id="product-section" className="product-section product-section1 container-fluid no-padding">
          {/* Container */}
          <div className="container">
            {/* Row */}
            <div className="row">
              {/* Section Header */}
              <div className="section-header">
                <h3>Our Products</h3>
                <p>our vision is to be Earth's most customer centric company</p>
                <img src="images/section-seprator.png" alt="section-seprator" />
              </div>{/* Section Header /- */}
              <ul id="filters" className="products-categories no-left-padding">
                <li><a data-filter="*" className="active" href="#">All Products</a></li>
                <li><a data-filter=".category1" href="#">jewellery</a></li>
                <li><a data-filter=".category2" href="#">books</a></li>
                <li><a data-filter=".category3" href="#">watches</a></li>
                <li><a data-filter=".category4" href="#">shoes</a></li>
                <li><a data-filter=".category5" href="#">electronics</a></li>
                <li><a data-filter=".category6" href="#">mobiles</a></li>
                <li><a data-filter=".category11" href="#">more<i className="fa fa-angle-down" /></a></li>
              </ul>
              {/* Products */}
              <ul className="products">
                {/* Product */}
                {this.state.products.map(product => {
                                return (
                                    <li key={product.id} className={'product category'+product.category_id}>
                                        <a >
                                            <img src={config.urlsever+product.img} alt="Product" style={{width:270,height:300}} />
                                            <h5>{product.name}</h5>

                                            <span className="price"><del>${product.priceold}</del>${product.pricenew}</span>
                                        </a>
                                        <a href="#" className="add-to-cart1" title="Add To Cart">Add To Cart</a>
                                        <div className="wishlist-box">
                                            <a href="#"><i className="fa fa-arrows-alt" /></a>
                                            <a href="#"><i className="fa fa-heart-o" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </li>
                                )
                            })
                            }{/* Product /- */}
              </ul>{/* Products /- */}
            </div>{/* Row /- */}
            <nav className="ow-pagination">
              <ul className="pager">
                <li className="number"><a href="#">{this.state.page}</a></li>
                <li className="load-more"><a href="#">Load More</a></li>
                <li className="previous"><a onClick = {() => this.updateState(1)}><i className="fa fa-angle-right" /></a></li>
                <li className="next"><a onClick = {() => this.updateState(2)}><i className="fa fa-angle-left" /></a></li>
              </ul>
            </nav>
          </div>{/* Container /- */}
        </div>
      );
  }
}
