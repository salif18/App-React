import React, { Component } from 'react';

class Inscript extends Component {
    constructor(props){
        super(props)
        this.state ={
          nom:'',
          toDolist:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
       this.setState({
        nom:event.target.value
       })
    }

    handleSubmit(){
        this.setState({
            toDolist:this.state.nom.split(';')
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.nom} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>enregistrer</button>

                <p>User:</p>
                <ul>
                    {this.state.toDolist.map((element, index) =>
                     <li>{index +1} - {element}</li>
                    )}
                
                    
                </ul>
            </div>
        );
    }
}

export default Inscript;