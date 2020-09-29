import React from 'react';
const ValidationComponent = (props)=>{
    let output = null;
    if(props.userInput >= 5){
        output =(
            <p>Text is long enough</p>
        )
    }else{
        output =(
            <p>Text is short</p>
        )
    }
    return (
        <div>
            <p>The text length is: {props.userInput} characters</p>
            {output}
        </div>
    )
}

export default ValidationComponent;