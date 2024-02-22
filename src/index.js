import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { About } from './About';
import { Project } from './Project';
import { Route,BrowserRouter,Routes, } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}>
    <Route path='Home' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Project' element={<Project/>}/>
      <Route path='Contact' element={<Contact/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);

reportWebVitals();
