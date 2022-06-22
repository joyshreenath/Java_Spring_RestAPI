import React from 'react'
import './about.css'
import Me1 from '../../assets/Me1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
              <div className="about__me">
                 <div className="about__me-image"></div>
                 <img src={Me1} alt="About Image"/>
              </div>
              <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Clients</h5>
                        <h5>Experience</h5>
                        <small>2+ Years Working</small>
                    </article>
                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>100+ worldwide</small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>50+ Completed</small>
                    </article>
                    </div>
                    <p>Total 2 years 4 months experience in Software Development. Extensive experience in software requirement analysis and development using programming languages like Java, Javascript, Python and Angular, beginner level knowledge in React.
                    Strong expertise in design, development and testing of computer-based systems using JAVA, Spring MVC and Spring Boot framework, REST API, JSP, JavaScript. Profound skills in optimization of architecture using SQL browser, PostGreSQL, MySQL Workbench, MS Access, and Oracle.
                    Performance of installation, integration and operation of computer-based systems following Agile( SCRUM) and assessment, test, troubleshooting, and upgrading in ALM and JIRA. Coordination of information systems professionals with DevOps (Jenkins and Azure)
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    </div>
              
              </div>
        </section>
    )
}

export default About