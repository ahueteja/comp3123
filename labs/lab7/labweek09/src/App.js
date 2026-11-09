import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [student] = useState({
    studentId: '101570138',
    name: 'Anthony Huete-Jacobs',
    college: 'George Brown College, Toronto'
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />

        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>

        <p>{student.studentId}</p>
        <p>{student.name}</p>
        <p>{student.college}</p>
      </header>
    </div>
  );
}

export default App;
