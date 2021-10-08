import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} /> {/* exact path para dizer que se navegar até '/' somente, ele irá renderizar o home */}
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' /> {/*Caso qualquer outra coisa seja digitada, ele será direcionado para o '/'. */}
    </Switch>