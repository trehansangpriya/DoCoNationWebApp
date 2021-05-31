import React from 'react'
import styles from '../../../../styles/Screens/Startup/Cards.module.css'
import Card from './Card'

const Cards = ({ title, data }) => {
    return (
        <div className={styles.cardsSection + ' section d-flex d-col'} >
            <h2>
                {title}
            </h2>
            <br />
            <div className={styles.cards}>
                {data.map(({ title, icon, content }) => (
                    <Card
                        content={content}
                        title={title}
                        icon={icon}
                    />
                ))}
            </div>
        </div >
    )
}

export default Cards
