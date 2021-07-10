import React, { useEffect, useState } from 'react'
import { db } from './../config/firebaseConfig';
import styles from '../styles/Screens/Library/library.module.css'
import YtVid from './../components/Screens/Events/YtVids/YtVid';
import Link from 'next/link';

const library = () => {
    const tags = ['All', 'Technology', 'Blockchain', 'AR-VR', 'Some Tag', 'Something']
    const [selectedTag, setSelectedTag] = useState('All')
    console.log(selectedTag);
    const [ytVids, setYtVids] = useState([])

    useEffect(() => {
        db.collection('ytVids').orderBy('published', 'desc').onSnapshot(
            snapshot => {
                setYtVids(snapshot.docs.map(
                    doc => ({ id: doc.id, details: doc.data() })
                ))
            }
        )
    }, [])
    return (

        <div className='section'>
            <div className={styles.header}>
                <div className={styles.info}>
                    <h2>All Past Events</h2>
                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <div
                                className={tag === selectedTag ? styles.tag + ' ' + styles.active : styles.tag}
                                onClick={e => setSelectedTag(tag)}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.btnHolder}>
                    <Link href='/events'>
                        <a className="btn btn-sec">Go Back</a>
                    </Link>
                </div>
            </div>
            <div className={styles.videos}>
                {ytVids.map(({ id, details }) => {
                    if (selectedTag === 'All') {
                        return (
                            <div className={styles.card}>
                                <div className={styles.img}>
                                    <img src={details.image} alt={details.title} />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.title}>{details.title}</div>
                                    <div className={styles.subtitle}>{details.subtitle}</div>
                                    <div className={styles.tags}>
                                        {
                                            details.tags.map(tag => (
                                                <div className={styles.tag}>{tag}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={styles.btnHolder}>
                                    <a href={details.link} target='_blank' className="btn btn-success">Watch Now</a>
                                </div>
                            </div>
                        )
                    }
                    if (details.tags.includes(selectedTag)) {
                        return (

                            <div className={styles.card}>
                                <div className={styles.img}>
                                    <img src={details.image} alt={details.title} />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.title}>{details.title}</div>
                                    <div className={styles.subtitle}>{details.subtitle}</div>
                                    <div className={styles.tags}>
                                        {
                                            details.tags.map(tag => (
                                                <div className={styles.tag}>{tag}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={styles.btnHolder}>
                                    <a href={details.link} target='_blank' className="btn btn-success">Watch Now</a>
                                </div>
                            </div>

                        )
                    }

                })}
            </div>

        </div>
    )
}

export default library
