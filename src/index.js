import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import App from './App';
import Error404 from './pages/404';
import APropos from './pages/aPropos';
import Contact from './pages/contact';
import img from './img/me.jpg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/a-propos' element={<APropos src={img} />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='*' element={<Error404 />}></Route>
    </Routes>
  </Router>
);

reportWebVitals();
