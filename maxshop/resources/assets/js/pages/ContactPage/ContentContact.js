import React, { Component } from 'react';

class ContentContact extends Component {
    render() {
        return (
            <div className="contact-us container-fluid no-padding">
        <div className="col-md-6 col-sm-6 col-xs-12 no-padding">
          <div className="contact-detail">
            {/* Section Header */}
            <div className="section-header">
              <h3>Get In Touch</h3>
              <p>Also Connect With Social Media To Anytime</p>
            </div>{/* Section Header /- */}
            <div className="contact-info">
              <i className="icon icon-Pointer" />
              <p>Max Shop, 65 Huge Street Melbourne,</p> 
              <p>2850 Australia.</p>
            </div>
            <div className="contact-info">
              <i className="icon icon-Phone2" />
              <a href="tel:(11)1234567890" title="Phone" className="phone">(11) 123 456 7890</a>
            </div>
            <div className="contact-info">
              <i className="icon icon-Phone2" />
              <a href="mailto:info@maxshop.com" title="info@maxshop.com">info@maxshop.com</a>
            </div>
            <ul className="social">
              <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" title="Tumblr"><i className="fa fa-tumblr" /></a></li>
              <li><a href="#" title="Vimeo"><i className="fa fa-vimeo" /></a></li>
              <li><a href="#" title="Pinterest"><i className="fa fa-pinterest-p" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 no-padding">
          <div className="form-detail">
            {/* Section Header */}
            <div className="section-header">
              <h3>Send a Message</h3>
              <p>Feel Free To Say Everything And Ask Questions</p>
            </div>{/* Section Header /- */}
            <form>
              <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                <input type="text" name="contact-name" className="form-control" id="input_name" placeholder="Full Name *" required />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                <input type="text" name="contact-email" className="form-control" id="input_email" placeholder="Email Address *" required />
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <input type="text" required placeholder="Subject *" id="input_subject" className="form-control" name="contact-subject" />
              </div>
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <textarea placeholder="Type Your Message . . ." id="textarea_message" name="contact-message" rows={5} className="form-control" defaultValue={""} />
              </div>
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <button title="Submit" type="submit" id="btn_submit" name="post">Send Message</button>
              </div>
              <div id="alert-msg" className="alert-msg" />
            </form>
          </div>
        </div>
        {/* Map Section */}
        <div className="map container-fluid no-padding">
          <div className="map-canvas" id="map-canvas-contact" data-lat="-32.559356" data-lng="149.564237" data-string="Max Shop, 65 Huge Street Melbourne,  2850 Australia." data-zoom={12} />
          <a href="#">Max <span>Shop</span></a>
        </div>{/*  Map Section /- */}
      </div>
        );
    }
}

export default ContentContact;