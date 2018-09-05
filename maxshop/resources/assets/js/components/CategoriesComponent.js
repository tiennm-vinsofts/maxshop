import React, { Component } from 'react';
import config from '../config';

class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorys: [],
            urlcategory:config.urlapi+'categories?with=products',
        }

    }
    getData() {
        axios.get(this.state.urlcategory)
        .then(response => {
            this.setState({
                categorys: response.data.data
            });
        // console.log(this.state.categorys);
            
        })
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div>
                 <aside className="widget widget_categories">
              <h3 className="widget-title">Categories</h3>
              <ul>
              {this.state.categorys.map(category=> {
                //   console.log(category);
                  
                return(
                  <li key={category.id}><a href="#" title={category.name}>{category.name} <span>({category.products.length})</span></a></li>
                  )
                })
            }
              </ul>
            </aside>
            </div>
        );
    }
}

export default CategoriesComponent;
// <li><a href="#" title="Creative Designs">Creative Designs <span>(6)</span></a></li>
// <li><a href="#" title="Trendy Products">Trendy Products <span>(4)</span></a></li>
// <li><a href="#" title="Interior Products">Interior Products <span>(2)</span></a></li>
// <li><a href="#" title="Popular Products">Popular Products <span>(8)</span></a></li>
// <li><a href="#" title="Casual Shirts">Casual Shirts <span>(7)</span></a></li>