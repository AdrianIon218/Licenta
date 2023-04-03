import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../sass/index.scss';
import TransitionContext from './components/Features/TransitionContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransitionContext>
      <App />
    </TransitionContext>
  </React.StrictMode>
);
