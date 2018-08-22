import React from 'react'

const Nav = () => {
    const styles = {
        bar: {
            height: "50px",
            // backgroundColor: "black",
            color: "black",
            position: "relative",
            top: "50px"
        },
        ul:{
            // display: "flex",
            flexDirection: "row",
            fontSize: "20px",
        },
        solo: {
            display: "inline-block"
        },
        li: {
            display: "inline-block",
            float: "right"
        }
    }
    return (
        <div style = {styles.bar}>
            <ul style = {styles.ul}>
                <li style = {styles.solo} >Start Bootstrap</li>
                <li style = {styles.li} >Home</li>
                <li style = {styles.li} >About</li>
                <li style = {styles.li} >Sample Post</li>
                <li style = {styles.li} >Contact</li>

            </ul>
        </div>
    )
}

export default Nav