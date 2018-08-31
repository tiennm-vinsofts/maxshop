import React from 'react';
import {Route} from 'react-router-dom';
import {routes} from './router';

const SubRoutes = route => (
    <Route 
        path={route.path}
        render = {props => (
                <route.component {...props} route = {route.routes} />
            )}
    />
);

export default SubRoutes;