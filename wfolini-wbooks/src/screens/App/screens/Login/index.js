import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Redirect, withRouter } from 'react-router'
import { Authorization } from '../../authorization'
import wbooksLogoSvg from '../../assets/wbooks_logo.svg'
import "./style.css"

class Login extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }
  state = {
    redirectToReferrer: Authorization.isAuthenticated(),
    loginDataIncorrect: false,
    email: "",
    password: ""
  };
  handleEmail = (e) => {
    this.setState({email: e.target.value});
  };
  handlePwd = (e) => {
    this.setState({password: e.target.value});
  };
  submit = () => {
    axios.post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', {
      email: this.state.email,
      password: this.state.password
    })
    .then( () => {
      Authorization.authenticate();
      this.setState({ redirectToReferrer: true });
    })
    .catch( (error) => {
      console.log(error);
      this.setState({ loginDataIncorrect: true });
    });
  }
  render () {
    if (this.state.redirectToReferrer) {
      return (
        <Redirect to={"/dashboard"}/>
      )
    }
    return (
      <div>
        <img className="wbookslogo" alt="wbooks logo" src={wbooksLogoSvg}/>
        <form className="form">
          <input className="input" type="email" placeholder="Email"
            value={this.state.email} onChange={this.handleEmail}/>
          <input className="input" type="password" placeholder="Contraseña"
            value={this.state.password} onChange={this.handlePwd}/>
          {this.state.loginDataIncorrect  &&
            <p className="msjerror">* El email o la contraseña es incorrecto.</p>}
          <input type="button" className="button" onClick={this.submit} value="ingresar"/>
          <p className="message">¿No estas registrado?
            <Link to={`/SignUp`}> Creá una cuenta</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
