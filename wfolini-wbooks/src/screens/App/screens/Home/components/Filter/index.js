import React from 'react'
import './style.css';

class Filter extends React.Component {
  handleChange(e){
    this.props.filter(e.target.value)
  }
  render(){
    return(
      <select className="Filter"
        onChange={this.handleChange.bind(this)}>
        <option selected disabled value="">Seleccionar filtro</option>
        <option value="Nombre">Nombre</option>
        <option value="Autor">Autor</option>
      </select>
    );
  }
}

export default Filter;
