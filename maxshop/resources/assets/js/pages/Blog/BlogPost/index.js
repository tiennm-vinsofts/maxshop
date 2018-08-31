import React, { Component } from 'react';
import Header from '../../../components/Header';
import Banner from '../../../components/Banner';
import Footer from '../../../components/Footer';
import ContentBlogPost from './ContentBlogPost';
import Sidebar from '../../../components/Sidebar';

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