import React from 'react'
// import ParallaxImage from 'react-image-parallax2';

const Parallax = (props) => {
    const styles = {
        width: "100%",
        position: "fixed",
        "z-index": "-1",
        top: "0",
        // left: "50",
        marginLeft: "10%"
    }

    return (
        <div >
        <img src ={props.image} style = {styles}/>
        </div>
    )
}

export default Parallax