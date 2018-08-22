import React from 'react'

const Footer = (props) => {
    const styles = {
        container: {
        color: "black",
        display: "block",
        backgroundColor: "grey",
        height: "100px",
        fontSize: "50px",
        textAlign: "center",
        borderTop: "5px solid black",
        marginLeft: "10%"
        },
        image: {
            width: "100%"
        }
    }

    return (
        <div id = "bottom" style = {styles.container} >
        <img src = {props.image} style = {styles.image} />
        </div>
    )
}

export default Footer