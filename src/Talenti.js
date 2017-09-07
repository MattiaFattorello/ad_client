import React, { Component } from 'react';
import Talento from './Talento'

//import './Pg.css';


class Talenti extends Component {
  render() {
    const talenti = this.props.talenti;
    let talentiMap = <p>nessun talento</p>;

    if(talenti !== null){
      talentiMap = Object.keys(talenti).map( (id) =>
        <Talento key = {id} talento = {talenti[id]} />
      );
    }

    return (
      <ul className = 'talenti'>
        {talentiMap}
      </ul>
    );

  }
}

export default Talenti;
