import React, { Component } from 'react';

class TeamSection extends Component {
    render() {
        return (
            <div className="team-section container-fluid">
        {/* Container */}
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <h3>Our Excellent Team</h3>
            <p>our vision is to be Earth's most customer centric company</p>
            <img src="images/section-seprator.png" alt="section-seprator" />
          </div>{/* Section Header /- */}
          <div className="col-md-3 col-sm-4 col-xs-6">
            <div className="team-detail">
              <div className="team-box">
                <img src="images/team-1.jpg" alt="team" />
                <h3>james Christ</h3>
              </div>
              <div className="team-content">
                <h5>Web Designer</h5>
                <p>Believe it or not I'm walking on air.on a wing and a prayer.</p>
                <ul className="social">
                  <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
                  <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6">
            <div className="team-detail">
              <div className="team-box">
                <img src="images/team-2.jpg" alt="team" />
                <h3>jhon smith</h3>
              </div>
              <div className="team-content">
                <h5>Programmer</h5>
                <p>Believe it or not I'm walking on air.on a wing and a prayer.</p>
                <ul className="social">
                  <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
                  <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6">
            <div className="team-detail">
              <div className="team-box">
                <img src="images/team-3.jpg" alt="team" />
                <h3>jhon doe</h3>
              </div>
              <div className="team-content">
                <h5>Web Developer</h5>
                <p>Believe it or not I'm walking on air.on a wing and a prayer.</p>
                <ul className="social">
                  <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
                  <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-6">
            <div className="team-detail">
              <div className="team-box">
                <img src="images/team-4.jpg" alt="team" />
                <h3>stuart max</h3>
              </div>
              <div className="team-content">
                <h5>Web Designer</h5>
                <p>Believe it or not I'm walking on air.on a wing and a prayer.</p>
                <ul className="social">
                  <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
                  <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>{/* Container /- */}
      </div>
        );
    }
}

export default TeamSection;