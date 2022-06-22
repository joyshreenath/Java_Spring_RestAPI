import React from 'react'

import CV_JoyshreeNath from '../../assets/CV_JoyshreeNath.pdf'

const App = () => {
    return (
     <div className='cta'>
    <a href={CV_JoyshreeNath} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
     </div>
    )
}
 
export default App