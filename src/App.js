import React, { Component } from 'react';
import ValidationComponent from './output/Validation';
import CharComponent from './output/charComponent';

import './App.css';
import './index.css';




class App extends Component {
  state = {
    userInput: '',
    textLength: [],
  }
  
   textLengthHandler =(e) => {
     const output =e.target.value;
     const textLength = output.length;
     console.log(output);
     console.log(textLength);

     this.setState({
      userInput: output,
      textLength: textLength,
    })
     
   }

   deleteHandler = (id) => {
     const userInput = [...this.state.userInput].slice();
     userInput.splice(id, 1);
     const inputUpdate = userInput.join('');
     this.setState({
       userInput: inputUpdate
     })
   }

  

  render() {

    const characterList = [...this.state.userInput].map((char, id) =>{
      return ( <CharComponent character={char} click= {() => this.deleteHandler(id)} key={id}/>)
    })
    const inputStyle = {
        width: '60%',
        height: '30px',
        fontSize: '18px',
        margin: '20px 0',
    }

    
    const flex = {

      display: 'flex',
      flexDirection: 'column'
    }
    
    
    return (
      <div className="Bg">
        <div className="Container">
          <h1 className="Title">Second React Assignment 🔥</h1>
          <label htmlFor="character" style={flex}>
            Enter some text below ✍ 
            <input style={inputStyle} htmlFor="character" onChange={(e)=>this.textLengthHandler(e)} value={this.props.userInput} type="text"></input>
          </label>
          <ValidationComponent userInput={this.state.textLength}/>
          {characterList}
        </div>
      </div>
    )
  }
}

export default App;
