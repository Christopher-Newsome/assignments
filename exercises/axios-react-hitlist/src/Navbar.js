import React from 'react'

const Navbar = () => {
    const styles = {
        navbar: {
            width: "100%",
            height: "80px",
            backgroundColor: "black",
            color: "red",
            marginBottom: "20px",
        },
        text: {
            position: "absolute",
            top: "15px",
            left: "100px"
        },
        image: {
            height: "80px"
        }
    }
    return(
        <div style = {styles.navbar} >
            <img style = {styles.image} src = "https://i.ebayimg.com/images/g/Qn8AAOSwB09YLtvT/s-l300.jpg" />
            <p style = {styles.text}>
                The Don's Hitlist
            </p>
        </div>
    )
}

export default Navbar