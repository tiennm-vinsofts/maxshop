import React, { Component } from 'react';
import Header from '../../../components/Header';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import ErrorPage from './ErrorPage';
class Error extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <ErrorPage/>
                <Footer/>
            </div>
        );
    }
}

export default Error;