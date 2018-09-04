import React, { Component } from 'react';
import Sidebar from '../../components/SidebarComponent';
import BlogContent from './BlogContent';
import Banner from '../../components/BannerComponent';

class Blog extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className="container">
                    <BlogContent/>
                    <Sidebar/>
                    <nav className="ow-pagination">
                        <ul className="pager">
                        <li className="number"><a href="#">4</a></li>
                        <li className="load-more"><a href="#">Load More</a></li>
                        <li className="previous"><a href="#"><i className="fa fa-angle-right" /></a></li>
                        <li className="next"><a href="#"><i className="fa fa-angle-left" /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Blog;