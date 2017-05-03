import React from 'react'
import { PrivateRoute } from './authorization'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import booksjson from './data/books.json'
import Dashboard from './screens/Dashboard'
import Detail from './screens/Detail'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import './style.css';

class App extends React.Component {
  state = {
    books: booksjson
  };
  findBookById = ( id ) =>
    this.state.books.find(book => book.id === parseInt(id, 10));
  render () {
    return(
      <Router>
        <div className="App">
          <Route path="/Login" render={ ({ match }) => (
              <Login/>
          )}/>
          <Route path="/SignUp" render={ ({ match }) => (
              <SignUp/>
          )}/>
          <PrivateRoute exact={true} path="/" render={ () => (
              <Redirect to="/dashboard"/>
          )}/>
          <PrivateRoute exact={true} path="/dashboard" render={ () => (
              <Dashboard books={this.state.books} />
          )}/>
          <PrivateRoute path="/book/id=:id" render={ ({ match }) => (
              <Detail book={this.findBookById(match.params.id)}/>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
