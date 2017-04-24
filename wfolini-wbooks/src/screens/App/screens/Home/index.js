import React from 'react';
import BookList from './components/BookList'
import Tools from './components/Tools'
import booksJson from './data/books.json'
import './style.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = { bookList: booksJson }
  }
  filter(e){
    this.setState({
      filter: e,
      search: ""
    });
  }
  finder(e){
    this.setState({ search: e })
  }
  render() {
    let books = this.state.bookList;
    if (this.state.search && this.state.filter) {
      books = books.filter(book =>
        ((this.state.filter === "Nombre") ? book.title : book.author)
        .toLowerCase()
        .includes(this.state.search.toLowerCase()))
    }
    return (
      <div className="Home">
        <Tools finder={this.finder.bind(this)} filter={this.filter.bind(this)}/>
        <BookList books={books}/>
      </div>
    );
  }
}

export default Home;
