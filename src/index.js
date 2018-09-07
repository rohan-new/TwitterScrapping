import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TweetsApp from './components/TweetsApp.react';
import registerServiceWorker from './registerServiceWorker';


var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);
ReactDOM.render(
    <TweetsApp tweets={initialState}/>,
    , document.getElementById('root'));

registerServiceWorker();
