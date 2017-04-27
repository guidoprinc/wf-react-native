import React from 'react'
import './style.css';
import { FILTERAUTHOR, FILTERTITLE } from '../../../../../../constants'


class Filter extends React.Component {
  handleChange = (e) => {
    this.props.filter(e.target.value)
  };
  render(){
    return(
      <select className="Filter"
        onChange={this.handleChange}>
        <option selected disabled value="">Seleccionar filtro</option>
        <option value={FILTERTITLE}>Nombre</option>
        <option value={FILTERAUTHOR}>Autor</option>
      </select>
    );
  }
}

export default Filter;
