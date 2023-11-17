import React from 'react'
import './Main.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
  return (
    <div className='container'>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default Main;
