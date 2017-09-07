import React, { Component } from 'react';
import {Axios} from 'axios';
import PgList from './PgList'
import './Pgs.css';


class Pgs extends Component {
  constructor(props) {
    super(props);
    this.state = {pgs: null};

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var axios = new Axios();
    axios.get('http://192.168.33.10/arcana_domine/core/app/Pg')
    .then(res => this.setState({pgs: res.data }))
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <PgList className = 'pgs' pgs = {this.state.pgs} />
    );
  }
}

export default Pgs;
