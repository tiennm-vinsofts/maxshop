import React, { Component } from 'react';
import Header from '../../components/HeaderComponent';
import Slide from '../../components/SlideComponent';
import Footer from '../../components/FooterComponent';
import Product from './Product';
import Collection from './Collection';
import Deal from './Deal';
import Testimonial from './Testimonial';
import Latest from './Latest';
import Selling from './Selling';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slide/>
                <Product/>
                <Collection/>
                <Deal/>
                <Testimonial/>
                <Latest/>
                <Selling/>
                <Footer/>
            </div>
        );
    }
}

export default Home;