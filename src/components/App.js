import logo from '../logo.svg';

import React from 'react';
import css from './App.module.css'
import Header from './Header.js'
import Home from './Home.js'
import Navbar from './Navbar.js'



function App() {
  return (
    <div>
      <div className={css.AppContainer}>
          Test
        </div>
        <div className={css.container}>
          <Header/>
          <main className={css.content}>
            <Home/>
          </main>
          <Navbar/>
        </div>
    </div>
    
  );
}

export default App;

