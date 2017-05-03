import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export var Authorization = {
  isAuthenticated: () =>
    localStorage.getItem('isAuthenticated'),
  authenticate() {
    localStorage.setItem('isAuthenticated', true)
  },
  signout() {
    localStorage.setItem('isAuthenticated', false)
  }
}

export const PrivateRoute = ({ render: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Authorization.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/Login'
      }}/>
    )
  )}/>
)
