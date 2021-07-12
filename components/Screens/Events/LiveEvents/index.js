import React from 'react'
import Event from './Event'
import styles from '../../../../styles/Screens/Events/LiveEvents/EventCards.module.css'

const EventCards = ({ title, data }) => {
    return (
        <div className='section'>
            <h2>{title}</h2>
            <div className={styles.events}>
                {data.map(({ id, details }) => {
                    const eventDate = details.datetime.toDate()
                    return (
                        <Event
                            active={(details.status === 'Live')}
                            title={details.title}
                            date={eventDate.toDateString()}
                            time={
                                (eventDate.getHours() > 12 ?
                                    `${eventDate.getHours() - 12}:${eventDate.getMinutes()} PM (IST)` :
                                    `${eventDate.getHours()}:${eventDate.getMinutes()} AM (IST)`)
                            }
                            img={details.image}
                            link={details.eventLink}
                            subtitle={details.subtitle}
                            tags={details.tags}
                            key={id}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default EventCards
