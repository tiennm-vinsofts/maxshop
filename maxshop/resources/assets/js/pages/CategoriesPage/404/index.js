import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ErrorPage from './ErrorPage';
class Error extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <ErrorPage/>
            </div>
        );
    }
}

export default Error;