import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ContentBlogPost from './ContentBlogPost';
import Sidebar from '../../../components/SidebarComponent';

class BlogPost extends Component {
    render() {
        return (
            <div>
            <div className="page-banner container-fluid no-padding">
            {/* Container */}
            <div className="container">
              <div className="banner-content">
                <h3>Our Blog</h3>
                <p>our vision is to be Earth's most customer centric company</p>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html" title="Home">Home</a></li>							
                <li className="active">Blog</li>
              </ol>
            </div>{/* Container /- */}
          </div>
                <div className="container">
                    <ContentBlogPost/>
                    <Sidebar/>
                </div>
            </div>
        );
    }
}

export default BlogPost;