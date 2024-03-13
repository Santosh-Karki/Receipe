import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router> 
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/App' element={<App/>}/>
  </Routes>
  </Router>
  </React.StrictMode>,
)
