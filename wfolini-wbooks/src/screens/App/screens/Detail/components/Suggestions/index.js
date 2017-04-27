import React from 'react'
import { BookIcon } from '../../../../shared/components/Book'
import './style.css'

class Suggestions extends React.Component {
  render () {
    return(
      <div>
        <h1 className="title">Sugerencias</h1>
        <div className="booklist">
          <BookIcon className="bookicon"/>
          <BookIcon className="bookicon"/>
          <BookIcon className="bookicon"/>
          <BookIcon className="bookicon"/>
        </div>
      </div>
    );
  }
}

export default Suggestions;
