import React, { Component } from 'react';
import Header from './Header';
import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

export default Index;
ReactDOM.render(<Index />, document.getElementById('example'));