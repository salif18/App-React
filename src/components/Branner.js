import React from "react"
import '../styles/Branner.css'
import logo from '../assets/salelogo.jpg'
const Branner = () => {
    const Titre = ''
    return (
    <header className='lmj-branner'>
        <h1 className='titre'>{Titre}</h1>
        <img className="logo" src={logo} alt="logoshop"/>
        <form>
            <input className='mySearch' type="text" placeholder="Search"/>
            <button className="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <i className="fa-solid fa-user"></i>
       <p><i class="fa-solid fa-cart-shopping"></i></p> 



    </header>
        )
}
export default Branner