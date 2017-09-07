import React, { Component } from 'react';
import Talenti from './Talenti';
//import './Pg.css';


class Pg extends Component {

  render() {
    let talenti = null;
    console.log(this.props.pg);
    if (this.props.pg.talenti_pgs !== 'undefined'){
      talenti = this.props.pg.talenti_pgs;
    }

    return (
      <div className = 'pg'>
        <p>id: {this.props.pg.id} nome: {this.props.pg.nome}</p>
        <p>background: {this.props.pg.background}</p>
        <p>
          razza: {this.props.pg.razze.nome}
          <br/> religione: {this.props.pg.religioni.nome}
          <br/> organizzazione: {this.props.pg.organizzazioni.nome}
          <br/> grado: {this.props.pg.grado}
        </p>
        <Talenti talenti = {talenti} />
      </div>
    );
  }

}

export default Pg;
