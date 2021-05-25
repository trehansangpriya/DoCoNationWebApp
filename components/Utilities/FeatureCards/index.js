import React from 'react'
import FeatureCard from './FeatureCard'
import featureStyle from '../../../styles/Utilities/FeatureCards/FeatureCards.module.css'

const FeatureCards = ({ title, data }) => {
    return (
        <div className={featureStyle.featureSection + ' section d-flex d-col'}>
            <h2 style={{ textAlign: " center " }}>
                {title}
            </h2>
            <div className={featureStyle.features}>
                {data.map(({ title, icon }) => (
                    <FeatureCard title={title} icon={icon} />
                ))}
            </div>
        </div>
    )
}

export default FeatureCards
