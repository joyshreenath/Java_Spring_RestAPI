import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.JPG'
const data = [
    {
        id: 1,
        image: img1,
        title: 'Java SpringBoot REST API',
        github: 'https://github.com/joyshreenath/Java_Spring_RestAPI'
    }

]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {
                data.map(({id, image, title, github, demo}) => {
                return (    
                <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                </div>
            </article>
                )
                })
            }
        </div>
        </section>
    )
}

export default Portfolio