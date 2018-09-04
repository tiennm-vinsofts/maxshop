import React, { Component } from 'react';
import Slide from '../../components/SlideComponent';
import Category from './Category';
import Product from './Product';
import Collection from './Collection';
import Deal from './Deal';
import Testimonial from './Testimonial';
import Latest from './Latest';
import Selling from './Selling';
<<<<<<< HEAD

=======
import Client from './Clients';
>>>>>>> loi

class Home extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Slide/>
<<<<<<< HEAD
=======
                <Category />
>>>>>>> loi
                <Product/>
                <Collection/>
                <Deal/>
                <Testimonial/>
                <Latest/>
                <Selling/>
                <Client />
            </div>
        );
    }
}

export default Home;
