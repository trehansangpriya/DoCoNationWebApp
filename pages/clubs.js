import React, { useEffect, useState } from 'react'
// Hero Section
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Clubs/heroSection.json'
// Feature Cards
import FeatureCards from './../components/Utilities/FeatureCards/index';
import featureCardData from '../data/Clubs/features.json'
// General Utility
import Spacer from '../components/Layout/Spacer';
import Join from './../components/Utilities/Join';
import { db } from './../config/firebaseConfig';
import Clubs from './../components/Screens/Clubs/index';
import About from './../components/Screens/Clubs/About/index';
const clubs = () => {
    // use state for clubs
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        db.collection('clubs').orderBy('name', 'asc').onSnapshot(snapshot => {
            setClubs(snapshot.docs.map(
                doc => doc.data()));
        });
    }, []);

    return (
        <div>
            {/* Hero Section Starts */}
            <HeroSection
                id='home'
                content={heroSectionData.content}
                title={heroSectionData.title}
                img={heroSectionData.img}
                btnTitle={heroSectionData.btnTitle}
                link={heroSectionData.link} />
            {/* Hero Section Ends */}

            <Spacer h='0px' id='clubs' />
            {/*<About id='clubs' />
            <Spacer h='20px' />*/}
            <Clubs data={clubs} />
            <Spacer h='50px' />
            {/* Feature Section Starts */}
            <FeatureCards id='benefits' title="Why Be A Part Of It?" data={featureCardData} />
            {/* Feature Section Ends */}
            <Spacer h='20px' />
            {/* Membership Section Starts */}
            <Join id='join' />
            {/* Membership Section Ends */}
        </div>
    )
}

export default clubs