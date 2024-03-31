import './App.css';
import { useState } from 'react';
import Landing from './components/Landing';
import Chat from './components/Chat';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  // document.body.style.backgroundColor = "#131619"

  return (
    <Router>
      {/* Navbar */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
   
  );
}

export default App;
