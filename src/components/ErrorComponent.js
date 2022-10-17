import React from 'react'
import { NavLink } from 'react-router-dom'


function ErrorComponent() {
  return (
    <div className='error'>
        
        <div className='error_container'>
        <h1>404</h1>
        <p>Oups! La page que vous avez demander n'existe pas. </p>
        <NavLink className='go_home' to="/">Retourner sur la page d'acceuil</NavLink>
        </div>
    </div>
  )
}

export default ErrorComponent