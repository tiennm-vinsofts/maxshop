import React, { Component } from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';
import Slide from './Slide';
import Footer from './Footer';

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slide/>
                <Footer/>
            </div>
        );
    }
}

export default Index;
ReactDOM.render(<Index />, document.getElementById('example'));