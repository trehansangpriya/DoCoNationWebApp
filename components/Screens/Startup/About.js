import React from 'react'
import Spacer from '../../Layout/Spacer'
import styles from '../../../styles/Screens/Startup/About.module.css'

const About = () => {
    return (
        <div className='section bg-blue800 c-light' style={{ scrollMarginTop: '80px' }}>
            <Spacer h='80px' />
            <h2>What is <span className="c-yellow">Startup Experience?</span></h2>
            <br />
            <p
                style={{
                    textAlign: 'justify'
                }}
            >Get an insight into how work is done in a Startup. The motto behind this new venture is to provide all students with the “Industry Experience” that all of us want to get. You can work with us in any domain that you may be skilled in.</p>
            <br />
            <div className={styles.btnHolder}>
                <a href="#" className="btn btn-primary">Apply Now</a>

            </div>
            <Spacer h='80px' />
        </div>
    )
}

export default About