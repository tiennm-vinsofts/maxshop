import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { routes } from './routers/router';
import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        {routes.map((route, i) => <Route key={i} {...route} />)}
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default Index;
ReactDOM.render(<Index />, document.getElementById('example'));