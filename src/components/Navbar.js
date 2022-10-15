import React from "react"
import '../styles/Navbar.css'
import Toggle from "./Toggle"
const Navbar = () =>{
    
    return (
       
             <nav className='lmj-navbar'>
                    
                      <a  href='#home'>Home</a>
                      <a  href='#menu'>Menu</a>
                      <a  href='#contact'>Contact</a>
                     
                    <><Toggle/></>
              </nav>
      

    )
}

export default Navbar