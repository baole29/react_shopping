import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Provider from './components/store/Provider'
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId = '1095217483237-dni9jq3km49trlmh4ct5f2gjcqab5o25.apps.googleusercontent.com';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId='1095217483237-dni9jq3km49trlmh4ct5f2gjcqab5o25.apps.googleusercontent.com'>
      <Provider>
    <App/>
  </Provider>
  </GoogleOAuthProvider>

);

