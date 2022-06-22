import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/UX</h3>
                </div>

                <ul className='service__list'></ul>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Experience in CSS pixel-level layout, Consistency with browsers, Version and Platform Independence.
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                    </p>
                </li>
               
            </article>
            {/* END OF UI/UX */}
            <article className="service">
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>

                <ul className='service__list'></ul>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Developed Web Applications and Web Services using HTML5, CSS3, JavaScript, JQuery, Angular and React.

                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Developed web pages using HTML/CSS, Javascript and React.
                        
                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                    </p>
                </li>
                
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                    </p>
                </li>
            </article>
            {/* END OF Web Development */}
            <article className="service">
                <div className="service__head">
                    <h3>Content Creation</h3>
                </div>

                <ul className='service__list'></ul>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Developed technical content(including syllabus structure for courses, exam schedules, benefits of taking a particular course) for Pondicherry University and technical(including information on technologies like JAVA, Angular, React, etc) and non-technical content(including benefits of travel, tourism to different coutries, studying abroad, etc.) for Indiastudychannel company.

                    </p>
                </li>
                <li>
                    <BiCheck className='service__list-icon' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        
                    </p>
                </li>
               
                
            </article>
            {/* END OF Content Creation */}
        </div>
        </section>
    )
}

export default Services