import React from 'react'

const Character = (props) => {
    // console.log(props.character)
    return (
        <>
            <h3>{props.character.name}</h3>
            <p>{props.character.show}</p>
            <img alt={props.character.name} src={props.character.img} />
        </> 
    )
}

export default Character; 