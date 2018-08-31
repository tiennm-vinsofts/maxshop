import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page container-fluid">
        {/* Container */}
        <div className="container">
          <div className="error-code">
            <span>4<img src="images/404.png" alt={404} />4</span>
          </div>
          <div className="error-content">
            <p><span>Oops!</span>  Page not found</p> 
            <a href="#" title="Back to home">Back to home</a>
          </div>
        </div>{/* Container /- */}
      </div>
        );
    }
}

export default ErrorPage;