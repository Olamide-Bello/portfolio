import React from 'react'
import Bumpcare from '../Assets/Bumpcare.jpg'
import Monvid from '../Assets/Monvid.png'
import Movies from '../Assets/Movies.png'
import Taskboard from '../Assets/Taskboard.png'
import PixelSwap from '../Assets/Pixelswap.png'
import Admin from '../Assets/Admin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <h3>Projects</h3>
            <div className='projects-container'>
                <div className='project'>
                    <img src={Bumpcare} alt='bumpcare' />
                    <div>
                        <p className="project-title-settings">BumpCare &nbsp;
                            <a href="https://bumpcare.net/" target="_blank" rel="noopener noreferrer" className="link-href">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade style={{ color: "#000000", }} />
                            </a>
                        </p>
                        <p>A website for rich in resources to help pregnant women and nursing mothers</p>
                        <i className="devicon-react-original-wordmark project-icon"></i>
                        <i className="devicon-javascript-plain project-icon"></i>
                        <i className="devicon-firebase-plain-wordmark project-icon"></i>
                        <i className="devicon-bootstrap-plain-wordmark project-icon"></i>

                    </div>
                </div>
                <div className='project'>
                    <img src={Monvid} alt='monvid' />
                    <div>
                        <p className="project-title-settings">Monvid &nbsp;
                            <a href="https://monvid.pages.dev/" target="_blank" rel="noopener noreferrer" className="link-href">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade style={{ color: "#000000", }} />
                            </a>
                        </p>
                        <p>An E-Commerce website for hotel supplies</p>
                        <i className="devicon-react-original-wordmark project-icon"></i>
                        <i className="devicon-javascript-plain project-icon"></i>
                        <i class="devicon-nodejs-plain project-icon"></i>
                        <i className="devicon-bootstrap-plain-wordmark project-icon"></i>
                    </div>
                </div>
                <div className='project'>
                    <img src={Movies} alt='getMovies poster' />
                    <div>
                        <p className="project-title-settings">getMovies &nbsp;
                            <a href="https://getmovies.pages.dev/" target="_blank" rel="noopener noreferrer" className="link-href">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade style={{ color: "#000000", }} />
                            </a>
                        </p>
                        <p>A movie website built using TMDB API</p>
                        <i className="devicon-react-original-wordmark project-icon"></i>
                        <i className="devicon-javascript-plain project-icon"></i>
                        <i className="devicon-bootstrap-plain-wordmark project-icon"></i>
                    </div>
                </div>
                <div className='project'>
                    <img src={Taskboard} alt='Taskboard' />
                    <div>
                        <p className="project-title-settings">Taskboard &nbsp;
                            <a href="https://task-board.pages.dev/" target="_blank" rel="noopener noreferrer" className="link-href">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade style={{ color: "#000000", }} />
                            </a>
                        </p>
                        <p>A simple task manager with reminder</p>
                        <i className="devicon-react-original-wordmark project-icon"></i>
                        <i className="devicon-javascript-plain project-icon"></i>
                        <i className="devicon-bootstrap-plain-wordmark project-icon"></i>
                    </div>
                </div>
                <div className='project'>
                    <img src={PixelSwap} alt='pixelswap' />
                    <div>
                        <p className="project-title-settings">PixelSwap &nbsp;
                        <a href="https://pixel-swap.pages.dev/" target="_blank" rel="noopener noreferrer" className="link-href">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} fade style={{ color: "#000000", }} />
                            </a>
                        </p>
                        <i className="devicon-react-original-wordmark project-icon"></i>
                        <i className="devicon-firebase-plain-wordmark project-icon"></i>
                        <i className="devicon-javascript-plain project-icon"></i>
                    </div>
                </div>
                <div className='project'>
                    <img src={Admin} alt='Monvid API' />
                    <div>
                        <p className="project-title-settings">Monvid API &nbsp;
                        </p>
                        <p>A restful API built with Node.Js</p>
                        <i className="devicon-nodejs-plain project-icon"></i>
                        <i className="devicon-javascript-plain project-icon"></i>
                        <i className="devicon-express-original project-icon"></i>
                        <i className="devicon-mongodb-plain-wordmark project-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects