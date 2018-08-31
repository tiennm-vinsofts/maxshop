import React, { Component } from 'react';
import Home from '../pages/Home';
import Cart from '../pages/Categories/Cart';
import Checkout from '../pages/Categories/Checkout';
import Error from '../pages/Categories/404';
import Shop from '../pages/Shop';
import ShopSingle from '../pages/Shop/ShopSingle';
import Blog from '../pages/Blog';
import BlogPost from '../pages/Blog/BlogPost';
import Contact from '../pages/Contact';

import About from '../pages/About';


import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default Index;
ReactDOM.render(<Index />, document.getElementById('example'));