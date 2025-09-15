import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import SubjectPage from './components/SubjectPage.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:subjectName" element={<SubjectPage />} />
      </Routes>
    </div>
  );
}

export default App;

