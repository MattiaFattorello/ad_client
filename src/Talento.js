import React, { Component } from 'react';
//import './Pg.css';


class Talento extends Component {
  
  render() {
    return (
      <li className = 'talento'> {this.props.talento.talenti.nome} </li>
    );
  }

}

export default Talento;
