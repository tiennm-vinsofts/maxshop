import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ErrorPage from './ErrorPage';
class Error extends Component {
    render() {
        return (
            <div>
            <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>404</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Error</li>
              </ol>
            </div>{/* Container /- */}
          </div>
                <ErrorPage/>
            </div>
        );
    }
}

export default Error;