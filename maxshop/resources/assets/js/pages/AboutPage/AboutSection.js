import React, { Component } from 'react';

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section container-fluid no-padding">
            {/* Container */}
            <div className="container">
              {/* Section Header */}
              <div className="section-header">
                <h3>About Our Max Shop</h3>
                <p>our vision is to be Earth's most customer centric company</p>
                <img src="images/section-seprator.png" alt="section-seprator" />
              </div>{/* Section Header /- */}
              <div className="col-md-6 col-sm-6 col-xs-6">
                <img src="images/about.jpg" alt="about" />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="about-content">
                  <h5>When you shop on <span>max shop</span> you can assured about the quality of the products you're buying.</h5>
                  <p>You wanna be where you can see our troubles are all the same. You wanna be where everybody knows Your name. So lets make the most of this beautiful day. Since we're together. , We're gonna do it. On your mark get set and go now.</p>
                  <p>Makin their way the only way they know how. That's just a little bit more than the law will allow. Doin' it our way. </p>	
                  <ul>
                    <li>We Provide Only Branded Products</li>
                    <li>Max Shop Provides Best Offers</li>
                    <li>Our Shop Located In World Wide</li>
                  </ul>
                </div>
              </div>
            </div>{/* Container /- */}
          </div>
        );
    }
}

export default AboutSection;