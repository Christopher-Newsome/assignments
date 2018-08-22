import React from 'react'

const Info = (props) => {
    const styles = {
        container: {
            backgroundColor: "grey",
            borderBottom: "5px solid black",
            borderTop: "5px solid black",
            marginLeft: "10%"
        },
        img: {
            width: "100%"
        }
    }

    return (
        <div id= "picture" style = {styles.container} >
        <img src = {props.image}  style = {styles.img} />
        </div>
    )
}

export default Info