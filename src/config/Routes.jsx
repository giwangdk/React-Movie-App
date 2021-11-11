import React from 'react'

import { Route, Switch } from 'react-router'

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/:category/search/:keyword'
                    component={Catalog}
                />
                <Route path='/:category/:id'
                    component={Detail}
                />
                <Route path='/:category'
                    component={Catalog}
                />
                <Route path='/'
                    exact
                    component={Home}
                />
            </Switch>
        </div>
    )
}

export default Routes
