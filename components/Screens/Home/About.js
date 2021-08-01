import React from 'react'
import Spacer from './../../Layout/Spacer';

const About = ({ id }) => {
    return (
        <div id={id} className='section bg-blue800 c-light' style={{ scrollMarginTop: '80px' }}>
            <Spacer h='80px' />
            <h2>What is <span className="c-yellow">DoCoNation?</span></h2>
            <br />
            <p
                style={{
                    textAlign: 'justify'
                }}
            >DoCoNation is a student community, made by the students for the students all around the globe to collaborate, network, and grow together! <br />
                It is a one-stop solution for all student problems out there!</p>
            <Spacer h='80px' />
        </div>
    )
}

export default About