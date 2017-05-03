import React from 'react';
import BookList from './components/BookList'
import Tools from './components/Tools'
import './style.css';

class Dashboard extends React.Component {
  state = { };
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
    let books = this.props.books;
    if (this.state.search && this.state.filter) {
      books = books.filter(book =>
        book[this.state.filter]
        .toLowerCase()
        .includes(this.state.search.toLowerCase()));
    }
    return (
      <div className="Dashboard">
        <Tools finder={this.finder} filter={this.filter}/>
        <BookList books={books}/>
      </div>
    );
  }
}

export default Dashboard;
