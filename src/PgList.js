import React, { Component } from 'react';
import Pg from './Pg'
//import './Pg.css';


class PgList extends Component {  
  render() {
    const pgs = this.props.pgs;
    let pgMap = <p>nessun PG</p>;

    if(pgs !== null){
      pgMap = Object.keys(pgs).map( (id) =>
        <Pg key = {id} pg = {pgs[id]} />
      );
    }

    return(
        <div className = 'pg-list'>{pgMap}</div>
    );
  }
}

export default PgList;
