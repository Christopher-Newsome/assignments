import React from 'react'

const Product = (props) => {
    const styles = {
        container: {
            color: "black",
            backgroundColor: "beige",
            height: "400px",
            width: "300px",
            display: "inline-block",
            borderRadius: "3%",
            textAlign: "center",
            margin: "30px",
            boxShadow: "7px 10px black",
            border: "3px solid grey",
            // marginLeft: "10%"            
        },
        h1: {
            textShadow: "5px 5px #DCDCDC"
        },
        img: {
            height: "30%",
            border: "1px solid black",
            boxShadow: "6px 6px grey"
        },
        h4: {
            margin: "30px",
        }
        
    }

    return (
        <div id = "card" name = "productTemplate" style = {styles.container} >
        <h1 style = {styles.h1} >{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <img src={props.image} style={styles.img}/>
        <h4 style = {styles.h4} >{props.information}</h4>
        </div>
    )
}

export default Product