import React from 'react'
import './style.css';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Create from './components/Create.jsx';
import Update from './components/Update.jsx';
import Read from './components/Read.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/add' element= {<Create />}/>
          <Route path='/all' element= {<Read />}/>
          <Route path='/:id' element= {<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
