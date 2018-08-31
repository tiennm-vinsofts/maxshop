import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="page-banner container-fluid no-padding">
        {/* Container */}
        <div className="container">
          <div className="banner-content">
            <h3>Cart</h3>
            <p>our vision is to be Earth's most customer centric company</p>
          </div>
          <ol className="breadcrumb">
            <li><a href="index.html" title="Home">Home</a></li>							
            <li className="active">Cart</li>
          </ol>
        </div>{/* Container /- */}
      </div>
        );
    }
}

export default Banner;