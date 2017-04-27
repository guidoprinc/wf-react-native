import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import booksjson from './data/books.json'
import Home from './screens/Home'
import Detail from './screens/Detail'
import './style.css';

class App extends React.Component {
  state = {
    books: booksjson
  };
  findBookById = ( id ) =>
    this.state.books.find(book => book.id == id);
  render () {
    return(
      <Router>
        <div className="App">
          <Route exact={true} path="/" render={ () => (
              <Home books={this.state.books} />
            )}/>
          <Route path="/book/id=:id" render={ ({ match }) => (
              <Detail book={this.findBookById(match.params.id)}/>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
