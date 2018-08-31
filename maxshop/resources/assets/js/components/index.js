import React, { Component } from 'react';
import Home from '../pages/HomePage';


import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default Index;
ReactDOM.render(<Index />, document.getElementById('example'));