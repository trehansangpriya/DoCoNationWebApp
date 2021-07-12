import React from 'react'
import heroStyles from '../../styles/Utilities/HeroSection.module.css'

const HeroSection = ({ title, content, img, link, id, btnTitle }) => {
    return (
        <div id={id} className={heroStyles.heroSection + ' section d-flex'}>
            <div className={heroStyles.text}>
                <h1>
                    {title.general}
                    <span className="c-blue">
                        {title.highlight}
                    </span>
                </h1>
                <p>{content}</p>
                <div className={heroStyles.btnHolder}>
                    <a href={link} className="btn btn-primary">{btnTitle}</a>
                </div>
            </div>
            <div className={heroStyles.img}>
                <img src={img.src} alt={img.alt} />
            </div>
        </div>
    )
}

export default HeroSection
