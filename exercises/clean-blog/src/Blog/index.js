import React from 'react'
import Overlay from './Overlay'
import Body from './Body'
import Footer from './Footer'

const Blog = () => {
    return (
        <div >
            <Overlay image = "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg" />
            <Body />
            <Footer />
        </div>
    )
}

export default Blog