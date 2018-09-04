import React, { Component } from 'react';
import Header from '../../../components/HeaderComponent';
import Banner from '../../../components/BannerComponent';
import Footer from '../../../components/FooterComponent';
import ContentBlogPost from './ContentBlogPost';
import Sidebar from '../../../components/SidebarComponent';

class BlogPost extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <div className="container">
                    <ContentBlogPost/>
                    <Sidebar/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BlogPost;