import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from '../App';
import Main from '../Main';
import NotFound from '../NotFound';
import ProductsCategories from '../ProductsCategories';
import ProductsList from '../ProductsList';
import SingleProduct from '../SingleProduct';

export default function customRouter() {
    return (
        <Router history={browserHistory}>
            <Route path={'/'} component={App}>
                <IndexRoute component={Main}/>
                <Route path={'/products'} component={ProductsCategories}/>
                <Route path={'/products/list'} component={ProductsList}/>
                <Route path={'/products/:id'} component={SingleProduct}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Router>
    );
}
