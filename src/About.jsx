import React from 'react';
import Common from './Common';
import web from '../src/Images/Nature2.png';



const About=()=> {
  return (
    <>
<Common name="Welcome to About Page" 
imgsrc={web} 
visit="/contact"
 btnname="Contact Now"/>
    </>
  )
    
  }
export default About;
