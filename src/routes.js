import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import UsersList from './components/usersList/UsersList'
import User from './components/userDetail/UserDetail'

const Routes = props => {
  return (
    <HashRouter>
      <Switch>
      <Route exact path="/" component={UsersList}/>
      <Route path="/user/" component={User}/>
      <Redirect from="*" to="/"/></Switch>      
    </HashRouter>
  )
}

export default Routes