import React from 'react'
import Pets from './Pets'

const Friends = (props) => {
    const newPets = props.pets.map((pet, i) => {
        return <Pets key = {pet.name + i} name = {pet.name} breed = {pet.breed} />
    })
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            {newPets}
        </div>
    )
}

export default Friends