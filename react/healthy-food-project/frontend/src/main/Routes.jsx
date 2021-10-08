import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Blog from '../components/blog'
import Home from '../components/Content'
import Recipes from '../components/recipes'
import Register from '../components/user/register'

export default props => 
    <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
  