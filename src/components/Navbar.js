import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state ={
      visibility :true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((previousState)=>({
      visibility:!previousState.visibility
    }))
  }

  render() {
    
      return (
      <div>
          <nav className='lmj-navbar'>
                    
                <a  href='#home'><i class="fa-solid fa-house"></i>Home</a>
                <a  href='#menu'><i class="fa-solid fa-bookmark"></i>Menu</a>
                <a  href='#contact'><i class="fa-brands fa-telegram"></i>Contact</a>
                     
               <button className="btn" onClick={this.handleClick}>
                <i className="fa-solid fa-bars"></i>
               </button>
            
          </nav>

      </div>
    );
  
   
 
}
}

export default Navbar;