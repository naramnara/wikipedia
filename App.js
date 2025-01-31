import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import './App.css';

const App =()=> {
  return (
    <Provider store={store}>
    <div style={{padding: '20px'}}>
     <h1>wikipedia</h1>
     <SearchBar/>
     <Results/>
    </div></Provider>
  );
};

export default App;
