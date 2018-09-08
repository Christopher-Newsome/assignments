import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    
    const styles = {
        height: "100px",
        backgroundColor: "red"
    }

    return (
        <div style = {styles}>
            <Link to="/">Meme</Link>
            <Link to="/create">Create</Link>
            <Link to="/about">About</Link>
            
        </div>
    )
}

export default Footer;