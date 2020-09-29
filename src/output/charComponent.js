import React from 'react';

const CharComponent = ( props ) => {
    const charStyle ={
        display :'inline-block',
        padding: '20px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #000',
        backgroundColor :'#f9dbbd',
        color: '#000',
        fontSize: '20px',
        borderRadius: '5px',
        boxShadow: '0 5px 50px rgba(0, 0, 0, 0.2)',
        
    }
    return (
        <div style={charStyle} onClick={props.click}>
          {props.character}
          
        </div>
    )
}

export default CharComponent;