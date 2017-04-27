import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/Home'
import Detail from './screens/Detail'
import './style.css';

const App = ({ match }) =>
  <Router>
    <div className="App">
      <Route exact={true} path="/" component={Home}/>
      <Route path="/book/id=:bookId" component={Detail}/>
    </div>
  </Router>

export default App;
