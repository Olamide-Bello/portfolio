import React from 'react'
import { saveAs } from 'file-saver';
import { Fade } from 'react-awesome-reveal';
import Resume from '../Assets/Resume.pdf'

const About = () => {

    const downloadResume = () => {
        saveAs(Resume, "Olamide_Bello_Resume.pdf");
    }
    return (
        <div id='about' className='about-container'>
            <h3>About Me</h3>
            <div className='about'>
                <Fade direction='left' duration={1200}>
                    <div className="about-dt">
                        <div className="card">
                            <div className="card-header">
                                <div className='div1'></div>
                                <div className='div2'></div>
                                <div className='div3'></div>
                            </div>
                            <div className="card-body"><br /><span className="wave">Hi :) </span><br />
                                <p>I am a self-taught web developer with a focus on  creating visually appealing and user-friendly interfaces that enhance the overall user experience. I have a strong understanding of HTML, CSS, JavaScript, TypeScript and I keep up-to-date with the latest web design and development trends.</p>
                                <p>I have experience working with a variety of tools and frameworks, such as React, NextJs, React-Redux, Express, among others, and I am able to adapt to new technologies quickly.</p>
                                <p>I have a keen eye for design and am able to create visually appealing layouts that are both functional and aesthetically pleasing.</p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade direction='left' duration={600}>
                    <div className='download-container'>
                        <button onClick={downloadResume}>Download Resume</button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default About