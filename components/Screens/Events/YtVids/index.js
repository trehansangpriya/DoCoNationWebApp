import Link from 'next/link';
import React, { useState } from 'react'
import styles from '../../../../styles/Screens/Events/YtVids/YtVids.module.css'
import YtVid from './YtVid';

const YtVids = ({ title, data }) => {

    return (
        <div className='section'>
            <h2>{title}</h2>
            <div className={styles.videos}>
                {data.map(({ id, details }) => {
                    return <YtVid
                        title={details.title}
                        subtitle={details.subtitle}
                        link={details.link}
                        img={details.image}
                        tags={details.tags}
                        key={id}
                    />
                })}
                <Link href='/library'>
                    <a className={styles.card}>
                        <div className={styles.text}>
                            View All
                        </div>
                        <div className={styles.icon}><i className="fas fa-arrow-alt-circle-right"></i>
                        </div>
                    </a></Link>
            </div>

        </div>
    )
}

export default YtVids
