import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

const frontEndAPI = "pk_test_Y2hpZWYtcmVwdGlsZS04My5jbGVyay5hY2NvdW50cy5kZXYk";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={frontEndAPI} >
      <App />
    </ClerkProvider>    
  </React.StrictMode>,
)
