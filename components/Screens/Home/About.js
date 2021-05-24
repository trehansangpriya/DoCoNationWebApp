import React from 'react'

const About = ({ id }) => {
    return (
        <div id={id} className='section' style={{ scrollMarginTop: '80px' }}>
            <h2>What is <span className="c-blue">DoCoNation?</span></h2>
            <p>DoCoNation is a student community, made by students for students all around the globe to collaborate, network, and grow together! <br />
            It is a compact solution for all student problems out there! </p>
        </div>
    )
}

export default About