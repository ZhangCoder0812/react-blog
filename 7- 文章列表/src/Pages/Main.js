import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './Login'
import AdminIndex from './AdminIndex'

function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/admin' component={AdminIndex}/>
                <Route path='/' component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Main
