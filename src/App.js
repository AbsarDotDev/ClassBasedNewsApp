import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,  Route, Routes  } from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>  

  <Router>
  <Navbar/>

    <Routes>

    <Route path="/" element={<News key="general" vat="general"/>}/>    
    <Route path="/business" element={<News key="business" vat="business"/>}/>    
    <Route path="/technology" element={<News key="technology"  vat="technology"/>}/>    

      </Routes>
  </Router>
      </>
    )
  }
}


