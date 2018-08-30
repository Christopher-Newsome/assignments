import React from 'react'

const Input = (props) => {
    return (
        <div>
            <form onSubmit = {props.handleSubmit} >
                <input  type = "text"
                        name = "firstName"
                        value = {props.firstName}
                        onChange = {props.handleChange}
                        placeholder = "First Name" />
                <input  type = "text"
                        name = "lastName"
                        value = {props.lastName}
                        onChange = {props.handleChange}
                        placeholder = "Last Name" />
                <input  type = "text"
                        name = "email"
                        value = {props.email}
                        onChange = {props.handleChange}
                        placeholder = "Email" />
                <input  type = "text"
                        name = "placeOfBirth"
                        value = {props.placeOfBirth}
                        onChange = {props.handleChange}
                        placeholder = "Place Of Birth" />
                <input  type = "text"
                        name = "phoneNumber"
                        value = {props.phoneNumber}
                        onChange = {props.handleChange}
                        placeholder = "Phone Number" />
                <input  type = "text"
                        name = "favoriteFood"
                        value = {props.favoriteFood}
                        onChange = {props.handleChange}
                        placeholder = "FavoriteFood" />
                <input  type = "text"
                        name = "aboutYou"
                        value = {props.aboutYou}
                        onChange = {props.handleChange}
                        placeholder = "Tell us about yourself" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Input