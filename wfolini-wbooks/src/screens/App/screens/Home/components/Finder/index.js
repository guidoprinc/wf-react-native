import React from 'react'
import searchico from '../../../../assets/search.svg'
import './style.css';

class Finder extends React.Component {
  constructor(props){
    super(props);
    this.state = { search: "" }
  }
  update(e) {
    this.setState({search: e.target.value})
  }
  finder(e){
    this.props.finder(this.state.search);
  }
  render(){
    return(
      <div className="Finder">
        <input  className="searchtxt" type="search" name="googlesearch"
          onChange={this.update.bind(this)}
          placeholder={'Buscar...'}
          />
        <button className="searchbutton"
          onClick={this.finder.bind(this)}><img src={searchico} alt="srchimg"/></button>
      </div>
    );
  }
}

export default Finder;
