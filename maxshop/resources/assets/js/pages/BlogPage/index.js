import React, { Component } from 'react';
import Sidebar from '../../components/SidebarComponent';
import BlogContent from './BlogContent';
import Banner from '../../components/BannerComponent';

class Blog extends Component {
    updateState(tien) {

        if(tien==1){
            if(this.state.data.last_page==this.state.page){return;
            }
            this.state.page++;
        }else{
            if(1==this.state.page){return;
            }
            this.state.page--;
        }
        this.state.urlproduct = config.urlapi+'products?page='+this.state.page;
        this.getData();
    }
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