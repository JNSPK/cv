import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import App from './App';
import Error404 from './pages/404';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='*' element={<Error404 />}></Route>
    </Routes>
  </Router>
);

reportWebVitals();
