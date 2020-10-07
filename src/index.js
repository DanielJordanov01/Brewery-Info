import React from 'react';
import {store} from "./store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const render = () => ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
render()
store.subscribe(render)
