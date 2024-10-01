import React from 'react'
import FrontPage from './Front_page'
import OurProducts from './OurProducts'
import ProjectDetails from './ProjectDetails'
import Partners from './Partners'
import Blog from './Blog'
import Contact from './Contact'
import WhatsAppButton from '../WhatsAppButton'
const Home = () => {
    return (
        <div className=' pb-20'>
            <FrontPage />
            <OurProducts/>
            <ProjectDetails/>
            <Partners/>
            <Blog/>
            <Contact/>
            <WhatsAppButton/>
        </div>
    )
}

export default Home