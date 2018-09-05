import React, { Component } from 'react';

class CategoriesComponent extends Component {
    render() {
        return (
            <aside className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>
                <ul>
                    <li><a href="#" title="Beautiful Chairs">Beautiful Chairs <span>(5)</span></a></li>
                    <li><a href="#" title="Creative Designs">Creative Designs <span>(6)</span></a></li>
                    <li><a href="#" title="Trendy Products">Trendy Products <span>(4)</span></a></li>
                    <li><a href="#" title="Interior Products">Interior Products <span>(2)</span></a></li>
                    <li><a href="#" title="Popular Products">Popular Products <span>(8)</span></a></li>
                    <li><a href="#" title="Casual Shirts">Casual Shirts <span>(7)</span></a></li>
                </ul>
            </aside>
        );
    }
}

export default CategoriesComponent;