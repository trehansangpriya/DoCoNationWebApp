import React, { useEffect, useState } from 'react';
// Hero Section
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Events/heroSection.json'
// Domain Section
import FeatureCards from "../components/Utilities/FeatureCards";
import domainData from '../data/Startup/features.json'
// Details
import DetailRC from '../components/Utilities/DetailRC';
import dataRC from '../data/Events/detailRC.json';
// General Utility
import Spacer from '../components/Layout/Spacer';
import EventCards from '../components/Screens/Events/LiveEvents';
import YtVids from './../components/Screens/Events/YtVids/index';
// Firebase
import { db } from '../config/firebaseConfig'
import Join from '../components/Utilities/Join';

const events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([])
    const [ytVids, setYtVids] = useState([])
    useEffect(() => {
        db.collection('events').orderBy('datetime', 'asc').limit(5).onSnapshot(
            snapshot => {
                setUpcomingEvents(snapshot.docs.map(
                    doc => {
                        if (doc.data().status === 'Published' || doc.data().status === 'Live') {
                            return {
                                id: doc.id,
                                details: doc.data()
                            }
                        }
                        return null
                    }
                ))
            }
        )
        db.collection('ytVids').orderBy('published', 'desc').limit(5).onSnapshot(
            snapshot => {
                setYtVids(snapshot.docs.map(
                    doc => ({ id: doc.id, details: doc.data() })
                ))
            }
        )
    }, [])
    return (
        <div>
            {/* Hero Section Starts */}
            <HeroSection
                content={heroSectionData.content}
                title={heroSectionData.title}
                img={heroSectionData.img}
                btnTitle={heroSectionData.btnTitle}
                link={heroSectionData.link} />
            {/* Hero Section Ends */}

            <Spacer h='20px' id='explore' />
            {/* Upcoming Live Events Start */}
            {
                upcomingEvents[0] === null ? (
                    <div></div>
                ) : (
                    <EventCards
                        title='Upcoming Events'
                        data={upcomingEvents}
                    />
                )
            }
            {/* Upcoming Live Events End */}

            <Spacer h='10px' />

            {/* Yt Recorded Events Start */}
            {
                ytVids.length === 0 ? (
                    <div></div>
                ) : (
                    <YtVids
                        title='Previous Events'
                        data={ytVids}
                    />
                )
            }
            {/* Yt Recorded Events End */}

            <Spacer h='50px' />

            {/* Domains Starts */}
            <FeatureCards
                title='Events in almost every domain!'
                data={domainData}
            />
            {/* Domains Ends */}

            <Spacer h='20px' />

            {/* Membership Section Starts */}
            <Join id='join' />
            {/* Membership Section Ends */}
        </div>
    )

}

export default events

// export async function getServerSideProps() {
//     const liveEventData = await fetch(`https://doconotion.herokuapp.com/live-events?auth=${process.env.API_AUTH}`)
//     const liveEvents = await liveEventData.json()
//     const ytVidsData = await fetch(`https://doconotion.herokuapp.com/youtube-vids?auth=${process.env.API_AUTH}`)
//     const ytVids = await ytVidsData.json()
//     return {
//         props: {
//             liveEvents,
//             ytVids
//         },
//     }
// }