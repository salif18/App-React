import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            infos:[]
        }

        this.handleChangEmail = this.handleChangEmail.bind(this)
        this.handleChangPass = this.handleChangPass.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangEmail(event){
        this.setState(()=>({
           email:event.target.value
        }))
    }

    handleChangPass(event){
        this.setState(()=>({
            password:event.target.value
        }))
    }

    handleSubmit(){
        this.setState(()=>({
            infos:this.state.email + this.state.password
        }))
    }
    render() {
        return (
            <div className='formLogin'>
                <input type='email' Placeholder='Email :' value={this.state.email} onChange={this.handleChangEmail}/>
                <input type='password' Placeholder='Password :' value={this.state.password} onChange={this.handleChangPass}/>
                <button className='buttonLogin' onClick ={this.handleSubmit}>Login</button>
            <p>User:</p>
            <ul>
                {this.state.infos}
                    
                
            </ul>
            
            </div>
        );
    }
}

export default Login;