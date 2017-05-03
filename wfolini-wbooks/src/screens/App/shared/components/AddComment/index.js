import React from 'react'
import peronimg from '../../../images/peron.jpg'
import './style.css'

const AddComment = (props) =>
  <div className="comment-container">
      <img className="profile-img" alt="profile img" src={peronimg}/>
      <form className="comment-detail">
        <h1 className="comment-title">Agregar comentario</h1>
        <textarea className="comment-box" maxLength="140"/>
        <button className="send-btn">Enviar</button>
      </form>
  </div>

export default AddComment
