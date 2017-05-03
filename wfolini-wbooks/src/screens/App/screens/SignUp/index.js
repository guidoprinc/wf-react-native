import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

class SignUp extends React.Component {
  state = {
    name: "",
    password: "",
    mail: ""
  }
  setName = (e) => {
    this.setState({name: e.target.value});
  }
  setPwd = (e) => {
    this.setState({password: e.target.value});
  }
  setMail = (e) => {
    this.setState({mail: e.target.value});
  }
  render () {
    return (
      <div className="background">
        <div className="form-background">
          <div className="form-container">
            <h1 className="form-title" >Nombre</h1>
            <input className="input" type="text"
              value={this.state.name} onChange={this.setName}/>
            <h1 className="form-title">Contraseña</h1>
            <input className="input" type="password"
              value={this.state.password} onChange={this.setPwd}/>
            <h1 className="form-title">Email</h1>
            <input className="input" type="email"
              value={this.state.mail} onChange={this.setMail}/>
            <div className="buttons">
              <Link to={`/Login`}>
                <button className="form-button cancelbutton">Cancelar</button>
                <button className="form-button acceptbutton">Aceptar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
