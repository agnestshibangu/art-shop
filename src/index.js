import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './style/index.scss'
import Header from './Components/Header'; 
import Footer from './Components/Footer'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Illustrations from './pages/Illustrations'
import Stickers from './pages/Stickers'
import Mugs from './pages/Mugs'
import Calendars from './pages/Calendars'
import './style/index.scss'


ReactDOM.render( 
  
  <Router>
    <Header /> 
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />  
      <Route path="/illustrations" element={<Illustrations />} />    
      <Route path="/stickers" element={<Stickers />} />   
      <Route path="/mugs" element={<Mugs />} />  
      <Route path="/calendars" element={<Calendars />} /> 
    </Routes>
    <Footer />  
  </Router>,
  document.getElementById('root')
)

