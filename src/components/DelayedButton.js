// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      
    }
  }
  
<<<<<<< HEAD
  clickHandler = event => {
   setTimeout(() =>{
     event.persist();
      this.props.onDelayedClick(event);
   }, this.props.delay);
  }
  
  render( ) {
    return (
      <button onClick={this.clickHandler} />
    );
=======
  clickHandler = () => {
    
>>>>>>> d0dcffab319f709502650e8a3f3ba0296a3fc445
  }
  
}