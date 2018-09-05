import React from 'react';
import {Route} from 'react-router-dom';

const RouterSubs = route => (
    <Route 
        path={route.path}
        render = {props => (
                <route.component {...props} route = {route.routes} />
            )}
    />
);

export default RouterSubs;