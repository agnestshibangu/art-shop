import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './style/index.scss'
import Header from './Components/Header'; 
import Footer from './Components/Footer'
import Home from './pages/Home'
import './style/index.scss'


ReactDOM.render( 
  
  <Router>
    <Header /> 
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />  
      <Route path="/todolist" element={<Todolist />} />   */}
    </Routes>
    <Footer />  
  </Router>,
  document.getElementById('root')
)

