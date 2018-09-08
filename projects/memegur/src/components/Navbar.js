import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const styles = {
      
    }

    return (
        <div>
        <ul>
            <li><Link to="/">Meme</Link></li>

            <li><Link to="/create">Create</Link>
                <ul>
                    <li>more stuff</li>
                    <li>more stuff</li>
                    <li>more stuff</li>
                </ul>
            </li>

            <li><Link to="/about">About</Link>
                <ul>
                    <li>more stuff</li>
                    <li>more stuff</li>
                    <li>more stuff</li>
                </ul>
            </li>

        </ul>    
        </div>
    )
}

export default Navbar;