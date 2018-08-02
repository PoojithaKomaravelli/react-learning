import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/js/app.js';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
module.hot.accept();