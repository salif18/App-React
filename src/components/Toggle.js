
import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props){
       super(props)
       this.state={visibility:true};
       this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({visibility:false})
    }
    render() {
        return (
            <div>
                <button className='btn' onClick ={this.handleClick}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        );
    }
}

export default Toggle;
