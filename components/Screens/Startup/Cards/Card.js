import React from 'react'
import styles from '../../../../styles/Screens/Startup/Card.module.css'

const Card = ({ title, icon, content }) => {
    return (
        <div className={styles.card + ' d-flex d-col'}>
            <div className={styles.icon}>
                <img src={icon} alt={title} />
            </div>
            <div className={styles.title}>
                <span>
                    {title}
                </span>
            </div>
            <div className={styles.content}>
                <span>
                    {content}
                </span>
            </div>
        </div>
    )
}

export default Card
