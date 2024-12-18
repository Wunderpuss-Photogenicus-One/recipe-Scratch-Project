import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import CreateRecipe from './components/CreateRecipe.jsx';

// import App from '.components/App.js' // fix this to be the correct filepath/filename once we've made that file
// import './styles.css'; // this is one way to connect our CSS but not the only way!

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recipe-builder' element={<CreateRecipe />} />
    </Routes>
  </BrowserRouter>
);

