import React from 'react';
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
// Membership Section
import Membership from '../components/Screens/Home/Membership';
import membershipData from '../data/Home/membershipData.json';

const events = ({ liveEvents, ytVids }) => {
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

            <Spacer h='20px' />
            {/* Upcoming Live Events Start */}
            {liveEvents.length === 0 ? (
                <div></div>
            ) : (
                <EventCards
                    title='Live Events'
                    data={liveEvents}
                />
            )}
            {/* Upcoming Live Events End */}

            <Spacer h='20px' />

            {/* Yt Recorded Events Start */}
            {
                ytVids[0] === null ? (
                    <div></div>
                ) : (
                    <YtVids
                        title='Recorded Events'
                        data={ytVids}
                    />
                )
            }
            {/* Yt Recorded Events End */}

            <Spacer h='80px' />

            {/* Domains Starts */}
            <FeatureCards
                title='Events in almost every domain!'
                data={domainData}
            />
            {/* Domains Ends */}

            <Spacer h='80px' />

            {/* Membership Section Starts */}
            <Membership id='join' data={membershipData} />
            {/* Membership Section Ends */}

            {/* DetailRC Starts */}
            {/* 
                <div className="bg-blue200">
                    <DetailRC
                        generalTitle={dataRC[0].title.general}
                        coloredTitle={dataRC[0].title.highlight}
                        content={dataRC[0].content}
                        img={dataRC[0].img}
                        rev={dataRC[0].rev}
                        alt={dataRC[0].alt}
                    />
                </div>
                */}
            {/* DetailRC Ends */}

            {/*<Spacer h='100px' />*/}
        </div>
    )

}

export default events

export async function getServerSideProps() {
    const liveEventData = await fetch(`https://doconotion.herokuapp.com/live-events?auth=${process.env.API_AUTH}`)
    const liveEvents = await liveEventData.json()
    const ytVidsData = await fetch(`https://doconotion.herokuapp.com/youtube-vids?auth=${process.env.API_AUTH}`)
    const ytVids = await ytVidsData.json()
    return {
        props: {
            liveEvents,
            ytVids
        },
    }
}