import React from 'react'
import featureCardStyles from '../../../styles/Utilities/FeatureCards/FeatureCard.module.css'

const FeatureCard = ({ icon, title }) => {
    return (
        <div className={featureCardStyles.feature + ' d-flex'}>
            <div className={featureCardStyles.title}>
                <span>
                    {title}
                </span>
            </div>
            <div className={featureCardStyles.icon}>
                <img src={icon} alt={title} />
            </div>
        </div>
    )
}

export default FeatureCard