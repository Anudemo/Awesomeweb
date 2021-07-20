import React from 'react';
//import MenuIcon from '@material-ui/icons/Menu';
import { NavLink, Redirect } from 'react-router-dom';

const Navbar=()=>{
  function Icon(){
    
    const slideoutmenu=document.getElementById("slideout-menu");
      
      
     if(slideoutmenu.style.opacity=="0")
     {
     slideoutmenu.style.opacity='1';
     slideoutmenu.style.pointerEvents='none';
    }
    else{
    slideoutmenu.style.opacity='0';
    slideoutmenu.style.pointerEvents='auto';

}
     }


  
    return(
<>
<div className="container-fluid nav_bg">
<div className="row">
<div id="slideout-menu">
<ul>
        <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
        
</ul>
</div>
<div className="col-10 mx-auto">


<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">AnupTech</NavLink>
    <button onClick={Icon} id="menu-icon">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_avtive" className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_avtive" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_avtive" className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_avtive" className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
</div>

</div>

</div>

</>


    )
    
}

  
export default Navbar;
