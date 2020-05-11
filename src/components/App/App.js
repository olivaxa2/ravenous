import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList.js'
import SearchBar from '../SearchBar/SearchBar.js'
import { render } from '@testing-library/react';

class App extends React {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar/>
      <BusinessList/> 
    </div>
    );
}
}

export default App
