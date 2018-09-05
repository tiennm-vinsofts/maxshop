import React, { Component } from 'react';
import config from '../../config';

class BlogContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products: [],
        urlproduct:config.urlapi+'products',
        page: 1,
        data: [],
    }

}


getData() {
    axios.get(this.state.urlproduct)
        .then(response => {
            this.setState({
                products: response.data.data.data,
                data:response.data.data
            });
        })
}
componentDidMount() {
    this.getData();
}
    render() {
        return (
            <div className="content-area blog-section col-md-8 col-sm-8 col-xs-12">
              <div className="type-post">
                <div className="col-md-5 col-sm-12 col-xs-12 no-padding entry-cover">
                  <a href="blog-post"><img src="images/blog-1.jpg" alt="blog" /></a>
                  <span className="post-date"><a href="#"><i className="fa fa-calendar-o" />July 16</a></span>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 blog-content">
                  <h3 className="entry-title"><a title="new Collectios are imported In Our shop." href="blog-post.html">new Collectios are <span>imported</span> In Our shop.</a></h3>
                  <div className="entry-meta">
                    <span className="post-like"><a href="#" title="224 Likes"><i className="fa fa-heart-o" />224 Likes</a></span>
                    <span className="post-admin"><i className="fa fa-user" />Posted By<a href="#" title="Max">Max</a></span>
                  </div>
                  <div className="entry-content">
                    <p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
                    <a href="blog-post" title="Read More" className="read-more">Read More<i className="fa fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              
            </div>
        );
    }
}

export default BlogContent;