import moment from 'moment/moment'
import React from 'react'

const Nav = () => {
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
    </nav>
  )
}

export default Nav