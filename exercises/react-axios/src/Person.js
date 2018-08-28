import React from 'react'

const Person = (props) => {
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Gender: {props.gender}</h2>
            <p>Birthday: {props.birth_year}</p>
        </div>
    )
}

export default Person