import React from 'react'
import { ReactComponent as Screen } from '../Assets/Screen.svg'
import Portrait from '../Assets/Portrait.jpeg'
import { Fade } from 'react-awesome-reveal'
import Typewriter from 'typewriter-effect';

const Profile = () => {
  return (
    <div className='profile'>
      <Fade direction='left' duration={1200}>
        <div className='profile-dt'>
          <Screen />
          <h1>Bello Olamide Akinniyi</h1>
          <Typewriter
            options={{
              strings: ['Frontend Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </Fade>
      <Fade direction='left' duration={600}>
        <div className='portrait'>
          <img src={Portrait} alt='my portrait' />
        </div>
      </Fade>
    </div>
  )
}

export default Profile