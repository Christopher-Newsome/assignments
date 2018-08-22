import React from 'react'

const Pets = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.breed}</h1>
        </div>
    )
}

export default Pets