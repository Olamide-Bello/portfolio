import React from 'react'
import { ReactComponent as Screen } from '../Assets/Screen.svg'
import Portrait from '../Assets/Portrait.jpeg'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile-dt'>
            <Screen/>
            <h1>Bello Olamide Akinniyi</h1>
            <h1>Frontend Developer</h1>
        </div>
        <div className='portrait'>
            <img src={Portrait} alt='my portrait' />
        </div>
    </div>
  )
}

export default Profile