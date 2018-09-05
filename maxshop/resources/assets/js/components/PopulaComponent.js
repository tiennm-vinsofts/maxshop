import React, { Component } from 'react';

class PopulaComponent extends Component {
    render() {
        return (
            <aside className="widget widget_tags">
                <h3 className="widget-title">popular tags</h3>
                <div className="tags-box">
                    <a href="#" title="Chairs">Chairs</a>
                    <a href="#" title="Modern Designs">Modern Designs</a>
                    <a href="#" title="Watches">Watches</a>
                    <a href="#" title="Future">Future</a>
                    <a href="#" title="Popular Products">Popular Products</a>
                    <a href="#" title="Trendy">Trendy</a>
                    <a href="#" title="Interier">Interier</a>
                    <a href="#" title="Modern">Modern</a>
                </div>
            </aside>
        );
    }
}

export default PopulaComponent;