import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Provider from './components/store/Provider'


const clientId = '1095217483237-dni9jq3km49trlmh4ct5f2gjcqab5o25.apps.googleusercontent.com';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider>
    <App/>
  </Provider>
 
);

