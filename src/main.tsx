import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TransitionContext from './components/Helpers/TransitionContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransitionContext>
      <App />
    </TransitionContext>
  </React.StrictMode>
);
