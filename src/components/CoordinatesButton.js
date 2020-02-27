// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      
    }
  }
  
<<<<<<< HEAD
  clickHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  
  render() {
    return (
      <button onClick={this.clickHandler} />
    );
=======
  clickHandler = () => {
    
>>>>>>> d0dcffab319f709502650e8a3f3ba0296a3fc445
  }
  
}