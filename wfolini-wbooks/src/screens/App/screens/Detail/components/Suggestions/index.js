import React from 'react'
import BookIcon from '../../../../shared/components/BookIcon'
import './style.css'

const Suggestions = (props) =>
  <div className="suggestions-container">
    <h1 className="title">Sugerencias</h1>
    <div className="booklist">
      <BookIcon className="bookicon"/>
      <BookIcon className="bookicon"/>
      <BookIcon className="bookicon"/>
      <BookIcon className="bookicon"/>
    </div>
  </div>

export default Suggestions
