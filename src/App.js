import React from 'react'
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import PageNotFound from './Pages/PageNotFound';
import BlogInfo from './Pages/BlogInfo';
import Footer from './Component/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/404' element={<PageNotFound/>}/>
        <Route path='*' element={<Navigate to='404'/>}/>
        <Route path='/Blog/:id' element={<BlogInfo />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

