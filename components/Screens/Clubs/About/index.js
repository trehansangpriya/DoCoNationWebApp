import React from 'react'

const About = ({ id }) => {
    return (
        <div id={id} className='section' style={{ scrollMarginTop: '80px' }}>
            <h2>Why Join <span className="c-blue">DoCoNation Clubs?</span></h2>
            <br />
            <p
                style={{
                    textAlign: 'justify'
                }}
            > If you've been thinking of mastering a skill, clubs at DoCoNation provide the ideal environment for students to grow together and consistently move towards your goals!

                <br />
                Be a part of a niche that supports you and helps you to stay consistent!
                <br />
                An idea environment for students who are all about learning and growing</p>
        </div>
    )
}

export default About