import React, { Component } from 'react';
import Header from '../../../components/HeaderComponent';
import Banner from '../../../components/BannerComponent';
import Footer from '../../../components/FooterComponent';
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