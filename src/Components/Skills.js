import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <h3>Skills</h3>
      <div className='skills-container'>
        <Fade direction='left' duration={1200}>
          <div>
            <i className="devicon-html5-plain project-icon"><p>HTML5</p></i>
          </div>
        </Fade>
        <Fade direction='left' duration={600}>
          <div>
            <i className="devicon-css3-plain project-icon"><p>CSS</p></i>
          </div>
        </Fade>
        <Fade direction='right' duration={600}>
          <div>
            <i className="devicon-react-original project-icon"><p>React</p></i>
          </div>
        </Fade>
        <Fade direction='right' duration={1200}>
          <div>
            <i className="devicon-nextjs-original project-icon"><p>Next.Js</p></i>
          </div>
        </Fade>
        <Fade direction='left' duration={1200}>
          <div>
            <i className="devicon-javascript-plain project-icon"><p>JavaScript</p></i>
          </div>
        </Fade>
        <Fade direction='left' duration={600}>
          <div>
            <i className="devicon-typescript-plain project-icon"><p>TypeScript</p></i>
          </div>
        </Fade>
        <Fade direction='right' duration={600}>
          <div>
            <i className="devicon-tailwindcss-plain project-icon"><p>Tailwind CSS</p></i>
          </div>
        </Fade>
        <Fade direction='right' duration={1200}>
          <div>
            <i className="devicon-bootstrap-plain project-icon"><p>Bootstrap</p></i>
          </div>
        </Fade>
        <Fade direction='left' duration={1200}>
          <div>
            <i className="devicon-nodejs-plain project-icon"><p>Node.Js</p></i>
          </div>
        </Fade>
        <Fade direction='left' duration={600}>
          <div>
            <i className="devicon-mongodb-plain project-icon"><p>MongoDB</p></i>
          </div>
        </Fade>
        <Fade direction='right' duration={600}>
          <div>
            <i className="devicon-git-plain project-icon"><p>Git</p></i>
          </div>
        </Fade>
        <Fade direction='right' duration={1200}>
          <div>
            <i className="devicon-firebase-plain project-icon"><p>Firebase</p></i>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Skills