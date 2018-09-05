import React, { Component } from 'react';

class SearchComponent extends Component {
    render() {
        return (
               
            <aside className="widget widget_search">
            <h3 className="widget-title">Search</h3>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search You Wants. . ." />
              <span className="input-group-btn">
                <button className="btn btn-search" title="Search" type="button"><i className="icon icon-Search" /></button>
              </span>
            </div>
          </aside>
        );
    }
}

export default SearchComponent;