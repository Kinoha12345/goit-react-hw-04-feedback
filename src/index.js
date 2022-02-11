import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FeedbackProvider from './Components/Context/Context';

ReactDOM.render(
  <React.StrictMode>
    <FeedbackProvider>
    <App />
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


