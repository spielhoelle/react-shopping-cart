// function requireAll (r) { r.keys().forEach(r); }
// requireAll(require.context('./', true, /\.pug$/));

console.log('Hi there!');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
