import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CharactersProvider } from './context/CharactersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </BrowserRouter>
);
