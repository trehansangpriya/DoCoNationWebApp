import React from 'react'
import styles from '../../../../styles/Screens/Events/YtVids/YtVids.module.css'
import YtVid from './YtVid';

const YtVids = ({ title, data }) => {
    return (
        <div className='section'>
            <h2>{title}</h2>
            <div className={styles.videos}>
                {data.map(({
                    date,
                    title,
                    image,
                    link,
                    id
                }) => {
                    const eventDate = new Date(date).toDateString()
                    return (
                        <YtVid
                            title={title}
                            date={eventDate}
                            link={link}
                            img={image}
                            key={id}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default YtVids
