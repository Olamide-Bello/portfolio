import moment from 'moment/moment'
import React, { useState } from 'react'
import Hamburger from '../Assets/Hamburger.png'
import Exit from '../Assets/Exit.png'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    return (
        <nav>
            <div className='date'>
                Today, {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </div>
            <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <img onClick={handleMenu} className='hamburger' src={Hamburger} alt='Hamburger menu'/>
            {menu && <div className='menu'>
                <img onClick={handleMenu} className='exit' src={Exit} alt='exit icon' />
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>}
        </nav>
    )
}

export default Nav