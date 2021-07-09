import React from 'react'
import Event from './Event'
import styles from '../../../../styles/Screens/Events/LiveEvents/EventCards.module.css'

const EventCards = ({ title, data }) => {
    return (
        <div className='section'>
            <h2>{title}</h2>
            <div className={styles.events}>
                {data.map(({
                    date,
                    time,
                    title,
                    status,
                    image,
                    link,
                    id
                }) => {
                    const eventDate = new Date(date).toDateString()
                    return (
                        <Event
                            active={status}
                            title={title}
                            date={eventDate}
                            img={image}
                            time={time}
                            link={link}
                            key={id}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default EventCards
