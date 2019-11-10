import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { nav } from './store/index';

ReactDOM.render(<App nav={nav}/>, document.getElementById('root'));
