import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
// import PersonForm from './components/PersonForm';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* adding default below makes this path the default path */}
          <Route element={<Main />}  path="/home" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
