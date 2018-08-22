import React from 'react'
import Nav from './Nav'

const Overlay = (props) => {
    const styles = {
        img: {
            height: "532px",
            width: "100%",
        },
        container: {
            position: "relative",
        },
        text: {
            position: "absolute",
            // backgroundColor: "black",
            color: "black",
            padding: "20px",
            top: "20%",
            right: "42%",
            textAlign: "center",
        },
        h1: {
            fontSize: "60px"
        },
        span: {
            fontSize: "20px"
        },
    }

    return (
        <div style = {styles.container} >
            <Nav />
            <img style = {styles.img} src = {props.image} />
            <div style = {styles.text} >
                <h1 style = {styles.h1} >Clean Blog</h1>
                <span style = {styles.span} >A Blog Theme by Start Bootstrap</span>
            </div>
        </div>
    )
}

export default Overlay