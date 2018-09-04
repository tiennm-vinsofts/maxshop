import React, { Component } from 'react';
import Banner from '../../../components/BannerComponent';
import ContentBlogPost from './ContentBlogPost';
import Sidebar from '../../../components/SidebarComponent';

class BlogPost extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className="container">
                    <ContentBlogPost/>
                    <Sidebar/>
                </div>
            </div>
        );
    }
}

export default BlogPost;