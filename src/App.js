import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Topics from './components/Topics';
import './App.css';

function App() {
  return (
    <div className = 'main'>
      <Header />
      <div className='content'>
        <Search />
        <Topics />
      </div>
    </div>
  );
}

export default App;
