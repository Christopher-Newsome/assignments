import React from 'react'

const Navbar = (props) => {
    const styles = {
        mainDiv: {
            position: "absolute",
            top: "0",
            width: "100%",
            height: "200px",
            
        },
        image: {
            width: "100%",
            height: "300px",
            borderBottom: "1px solid red"
        },
        ul: {
            listStyleType: "none",
            margin: "0",
            padding: "0",
            width: "200px",
            backgroundColor: "black",
            height: "100%",
            position: "fixed",
            overflow: "auto",
        },
        li: {
            display: "block",
            width: "100%",
            height: "100px",
            borderBottom: "1px solid red",
            textAlign: "center",
            backgroundColor: "black",
            position: "relative"
        },
        a: {
            fontSize: "35px",
            textDecoration: "none",
            position: "absolute",
            bottom: "0",
            top: "0",
            left: "52px",
            margin: "auto",
            height: "40px"
        },
        b: {
            fontSize: "35px",
            textDecoration: "none",
            position: "absolute",
            bottom: "0",
            top: "0",
            left: "34px",
            margin: "auto",
            height: "40px"
        },
        d: {
            fontSize: "35px",
            textDecoration: "none",
            position: "absolute",
            bottom: "0",
            top: "0",
            left: "6px",
            margin: "auto",
            height: "40px"
        }
    }

    return (
        <div id = "top" style = {styles.mainDiv} >
            <ul style={styles.ul} >
                <img src = {props.image} style = {styles.image}/>
                <li style = {styles.li}><a style = {styles.b} href="#top">Page Top</a></li>
                <li style = {styles.li}><a style = {styles.a} href="#picture">Picture</a></li>
                <li style = {styles.li}><a style = {styles.a} href="#card">Cards</a></li>
                <li style = {styles.li}><a style = {styles.d} href="#bottom">Page Bottom</a></li>
                <img src = {props.image} style = {styles.image}/>
            </ul>
            {/* <img src = {props.image} style = {styles.image} />  */}
        </div>
    )
}

export default Navbar