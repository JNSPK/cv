import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import App from './pages/accueil';
import Error404 from './pages/404';
import Stack from './pages/stack';
import Projets from './pages/projets';
import APropos from './pages/aPropos';
import img from './img/me.jpeg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/stack' element={<Stack />}></Route>
      <Route path='/projets' element={<Projets />}></Route>
      <Route path='/a-propos' element={<APropos src={img} />}></Route>
      <Route path='*' element={<Error404 />}></Route>
    </Routes>
  </Router>
);

reportWebVitals();
