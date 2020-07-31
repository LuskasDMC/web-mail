import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home/index'
import Login from './pages/Login/index'

export default  () => {
  const auth:{isLogged:boolean} = JSON.parse(localStorage.getItem('auth') as string)
  if(auth.isLogged){
    return (
      <Switch>
            <Route exact path="/home" component={Home} />
            <Redirect to="/home" />
      </Switch>
    )
  }else{
    return (
      <Switch>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
      </Switch>
    );
  }

}
