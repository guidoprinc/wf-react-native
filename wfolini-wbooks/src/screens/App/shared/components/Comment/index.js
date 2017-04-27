import React from 'react'
import peronimg from '../../../images/peron.jpg'
import './style.css'

class Comment extends React.Component {
  render () {
    return(
      <div className="comment-container">
          <img className="profile-img" alt="profile img" src={peronimg}/>
          <div className="comment-detail">
            <h1 className="comment-title">Walter Folini</h1>
            <h2 className="date">xx/xx/xx</h2>
            <p className="text">{this.props.comment}</p>
          </div>
      </div>
    )
  }
}

class AddComment extends React.Component {
  render () {
    return(
      <div className="comment-container">
          <img className="profile-img" alt="profile img" src={peronimg}/>
          <form className="comment-detail">
            <h1 className="comment-title">Agregar comentario</h1>
            <textarea className="comment-box" maxLength="140"/>
            <button className="send-btn">Enviar</button>
          </form>
      </div>
    )
  }
}

export { Comment, AddComment };
