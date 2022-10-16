import React, { Component } from 'react';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            prenom:'',
            nom:'',
            address:'',
            numero:'',
            email:'',
            password:'',
            infos:[]
        }
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleChange4 = this.handleChange4.bind(this)
        this.handleChange5 = this.handleChange5.bind(this)
        this.handleChange6 = this.handleChange6.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange1(event){
        this.setState(()=>({
            prenom:event.target.value
        }))
    }

    handleChange2(event){
        this.setState(()=>({
            nom:event.target.value
        }))
    }

    handleChange3(event){
        this.setState(()=>({
            address:event.target.value
        }))
    }

    handleChange4(event){
        this.setState(()=>({
            numero:event.target.value
        }))
    }

    handleChange5(event){
        this.setState(()=>({
            email:event.target.value
        }))
    }

    handleChange6(event){
        this.setState(()=>({
            password:event.target.value
        }))
    }

    handleSubmit(){
        this.setState(()=>({
            infos:this.state.prenom + this.state.nom + this.state.address +
            this.state.numero + this.state.email + this.state.password
            
        }))
}

    render() {
        return (
            <div className='form'>
                <input type='text' placeholder='Prenom :' value={this.state.prenom} onChange={this.handleChange1}/>
                <input type='text' placeholder='Nom :' value={this.state.nom} onChange={this.handleChange2}/>
                <input type='text' placeholder='Address :' value={this.state.address} onChange={this.handleChange3}/>
                <input type='number' placeholder='Numero :' value={this.state.numero} onChange={this.handleChange4}/>
                <input type='email' placeholder='Email :' value={this.state.email} onChange={this.handleChange5}/>
                <input type='password' placeholder='Password :' value={this.state.password} onChange={this.handleChange6}/>
                <button className='buttonFormulaire' onClick = {this.handleSubmit}>Signup</button>
           <p>Infos Users:</p>
           <ul>
           {this.state.infos}
           </ul>
           
           </div>
            
           
            
        );
    }
}

export default Signup;