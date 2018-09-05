import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import config from '../../config';

class ContentArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            urlproduct:config.urlapi+'products',
        }
    }
    componentDidMount() {
        axios.get(this.state.urlproduct)
            .then(response => {
                this.setState({ products: response.data.data.data });
            })

    }
    render() {
        return (
            <div className="col-md-8 col-sm-7 col-xs-12 content-area product-section2 no-left-padding">
            {/* Products */}
            <ul className="products">
              {/* Product */}
              {this.state.products.map(product => {
                                return (
                                    <li key={product.id} className={'product category'+product.category_id}>
                                        <a >
                                            <img src={"http://192.168.1.23/maxshop/maxshop/public/"+product.img} alt="Product" style={{width:375,height:300}} />
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
          </div>
        );
    }
}

export default ContentArea;
