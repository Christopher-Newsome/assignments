import React from 'react'

const Output = (props) => {
    return (
        <div className = "outputContainer">
            <div className = "badge">
                Badge:
            </div>
            <h3>Name: {props.firstName} {props.lastName}</h3>
            <h3>Place Of Birth: {props.placeOfBirth}</h3>
            <h3>Email: {props.email}</h3>
            <h3>Phone: {props.phoneNumber}</h3>
            <h3>Favorite Food: {props.favoriteFood}</h3>
            <div className = "aboutYouBox">
                <h3>{props.aboutYou}</h3>
            </div>
        </div>
    )
}

export default Output