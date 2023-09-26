import React from 'react';
import ReactDOM from 'react-dom/client';
class Car extends React.Component{
    constructor(){
        super();
        this.state={color:"red",module:"2020"};
    }
    render(){
        return <h1>I am a {this.state.color} Car {this.state.module}.</h1>
    }
}
export default Car;