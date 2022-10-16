import React, { Component } from 'react';
import cart from'../assets/cart.jpg'
import imag from '../img/nike.jpg'
class Achat extends Component {
    constructor(props){
     super(props);
     this.state = {
        compteur:0,
        s:'',
        m:'',
        l:'',
        xl:'',
        xxl:'',
        xxxl:'',
        produit:[]
     }
     this.incrEmente = this.incrEmente.bind(this)
     this.decrEmente = this.decrEmente.bind(this)
     this.reSet= this.reSet.bind(this)
     this.handleChange1 = this.handleChange1.bind(this)
     this.handleChange2 = this.handleChange2.bind(this)
     this.handleChange3 = this.handleChange3.bind(this)
     this.handleChange4 = this.handleChange4.bind(this)
     this.handleChange5 = this.handleChange5.bind(this)
     this.handleChange6 = this.handleChange6.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
    }
//incrementation
    incrEmente(){
        this.setState(()=>({
            compteur:this.state.compteur +1
        }))
    }
    decrEmente(){
        this.setState(() => ({
            compteur:this.state.compteur -1
        
        }))
    }

    reSet(){
        this.setState(() => ({
            compteur:0
        }))
    }

//change
handleChange1(event){
     this.setState({
        s:event.target.value
     })
}

handleChange2(event){
   this.setState({
    m:event.target.value
   })
}

handleChange3(event){
   this.setState({
    l:event.target.value
   })
}

handleChange4(event){
   this.setState({
    xl:event.target.value
   })
}

handleChange5(event){
   this.setState({
    xxl:event.target.value
   })
}

handleChange6(event){
   this.setState({
    xxxl:event.target.value
   })
}

//submit
handleSubmit(){
  this.setState({
    produit: this.state.s + this.state.m + this.state.l +
    this.state.xl + this.state.xxl + this.state.xxxl + this.state.compteur
  })
}

    render() {
        return (
            <div className='achat-produit'>
                <form className='form'> 
                 <img className='img-produit' src={imag} alt=''></img>   
                S <input type='radio' name='choix' value={this.state.s} onChange={this.handleChange1}/>
                M <input type='radio' name='choix' value={this.state.m} onChange={this.handleChange2}/>
                L <input type='radio' name='choix' value={this.state.l} onChange={this.handleChange3}/>
                XL <input type='radio' name='choix' value={this.state.xl} onChange={this.handleChange4}/>
                XXL <input type='radio' name='choix' value={this.state.xxl} onChange={this.handleChange5}/>
                XXXL <input type='radio' name='choix' value={this.state.xxxl} onChange={this.handleChange6}/>
                </form>
                <div className='btns'>
                <button className='incre' onClick ={this.incrEmente}>+</button>
                <button className='incre' onClick={this.decrEmente}>-</button>
                <button  onClick={this.reSet}>Reset</button>
                </div>
                <span><img src={cart} alt=''/></span><span className='span2'>={this.state.compteur}</span>
                <button className='btn-add' onClick ={this.handleSubmit}>Add Panier</button>

                <p>resultat</p>
                <ul>{this.state.produit}</ul>
            </div>
        );
    }
}

export default Achat;