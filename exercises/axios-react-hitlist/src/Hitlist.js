import React from 'react'

const Hitlist = (props) => {
    const styles = {
        container: {
            display: "inline-block",
            width: "300px",
            height: "300px",
            position: "relative",
            textAlign: "center"
        },
        image: {
            height: "100%",
            width: "100%",
            margin: "auto"
        },
        h1: {
            height: "40px",
            width: "100%",
            position: "absolute",
            backgroundColor: "blue",
            fontSize: "20px",
            opacity: "0.5",
            bottom: 0
        },
    }
    return(
            <div style = {styles.container}>
                <h1 style = {styles.h1} >{props.name}</h1>
                <img style = {styles.image} src = {props.image} alt = "criminal"/>
            </div>
    )
}

export default Hitlist