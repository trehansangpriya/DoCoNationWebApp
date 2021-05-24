import React from 'react'
import featureCardStyles from '../../../styles/Utilities/FeatureCards/FeatureCard.module.css'

const FeatureCard = ({ data }) => {



    return (

        <div className={featureCardStyles.featContainer}>
            {data.map(feature => (
                <div className={featureCardStyles.feature + ' d-flex'}>

                    <div className={featureCardStyles.icon}>
                        <img src={feature.icon} alt="Something" />
                    </div>

                    <div className={featureCardStyles.title}>
                        {feature.title}
                    </div>

                </div>
            ))}

        </div>

    )
}

export default FeatureCard
