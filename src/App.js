import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio/portfolio.js'
import TemporaryDrawer from './components/Drawer/drawer.js'
// import SearchAppBar from './components/Appbar/appbar.js'

function App() {
  return (
    <div className="App">
      <header 
      className="App-header"
      >
      {/* <SearchAppBar /> */}
      <TemporaryDrawer />
      </header>
      <Portfolio />
    </div>
  );
}

export default App;
