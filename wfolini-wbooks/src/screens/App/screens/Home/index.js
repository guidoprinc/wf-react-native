import React from 'react';
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import Tools from './components/Tools'
import booksJson from '../../data/books.json'
import './style.css';

class Home extends React.Component {
  state = {
    bookList: booksJson
  };
  filter = (e) => {
    this.setState({
      filter: e,
      search: ""
    });
  }
  finder = (e) => {
    this.setState({ search: e })
  };
  render() {
    let books = this.state.bookList;
    if (this.state.search && this.state.filter) {
      books = books.filter(book =>
        book[this.state.filter]
        .toLowerCase()
        .includes(this.state.search.toLowerCase()));
    }
    return (
      <div className="Home">
        <Tools finder={this.finder} filter={this.filter}/>
        <BookList books={books}/>
      </div>
    );
  }
}

export default Home;
