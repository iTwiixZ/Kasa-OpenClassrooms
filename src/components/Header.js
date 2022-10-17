import React from 'react'
import logo from "../assets/logo.svg";
import { NavLink} from "react-router-dom";
function Header() {
  return (
    <header>
        <img src={logo} alt="" />
        <div className='nav'>
            <NavLink to="/">Acceuil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </div>
    </header>
  )
}

export default Header