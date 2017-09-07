import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pgs from './Pgs';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pgs />, document.getElementById('react-root'));
registerServiceWorker();
