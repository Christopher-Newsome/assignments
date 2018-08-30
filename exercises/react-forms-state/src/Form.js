import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} >
        
            <input  type = "text" 
                    name = "ssn" 
                    value = {props.ssn} 
                    onChange = {props.handleChange} 
                    placeholder = "ssn"/>

            <input  type = "text" 
                    name = "mothersMaidenName" 
                    value = {props.mothersMaidenName} 
                    onChange = {props.handleChange} 
                    placeholder = "mother maiden name"/>

            <input  type = "text" 
                    name = "firstPet" 
                    value = {props.firstPet} 
                    onChange = {props.handleChange} 
                    placeholder = "first pet"/>

            <button>Submit</button>

        </form>
    )
}

export default Form