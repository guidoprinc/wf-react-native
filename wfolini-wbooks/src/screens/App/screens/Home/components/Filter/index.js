import React from 'react'
import './style.css';
import * as Constants from '../../../../../../constants'

class Filter extends React.Component {
  handleChange = (e) => {
    this.props.filter(e.target.value)
  };
  render(){
    return(
      <select className="Filter"
        onChange={this.handleChange}>
        <option selected disabled value="">Seleccionar filtro</option>
        <option value="title">{Constants.FILTERTITLE}</option>
        <option value="author">{Constants.FILTERAUTHOR}</option>
      </select>
    );
  }
}

export default Filter;
