import React from 'react'
import Finder from '../Finder'
import Filter from '../Filter'
import './style.css';

const Tools = (props) => {
  return (
    <div className="Tools">
      <Filter filter={props.filter.bind(this)}/>
      <Finder finder={props.finder.bind(this)}/>
    </div>
  );
}

export default Tools;
