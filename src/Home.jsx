import React from 'react';
import { NavLink } from 'react-router-dom';

import web from '../src/Images/Nature2.png';
import Common from './Common';




const Home=()=> {
  return (
    <>
    <Common name="Grow your business with" 
imgsrc={web} 
visit="/service"
 btnname="Get Started"/>

    </>
  )
    
  }
export default Home;
