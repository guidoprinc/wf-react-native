import React from 'react'
import Finder from '../Finder'
import Filter from '../Filter'
import './style.css';

const Tools = (props) =>
  <div className="Tools">
    <Filter filter={props.filter}/>
    <Finder finder={props.finder}/>
  </div>

export default Tools;
