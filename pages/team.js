import React, { useEffect, useState } from 'react'
// Hero Section
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Team/heroSection.json'
// General Utility
import Spacer from '../components/Layout/Spacer';
import Join from './../components/Utilities/Join';
import { db } from './../config/firebaseConfig';
import Department from '../components/Screens/Team/Department';
const team = () => {
    const [teamData, setTeamData] = useState([]);
    useEffect(() => {
        db.collection('team').onSnapshot((data) => {
            setTeamData(data.docs.map(doc => doc.data()));
        });
    }, []);
    console.log(teamData);
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

            <Spacer h='50px' id='team' />

            <h2 style={{ textAlign: " center " }}>
                Meet The Pioneers
            </h2>
            <p style={{ textAlign: " center " }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium ipsam ipsa
            </p>

            <Spacer h='50px' />
            <Department
                title='Marketing'
                data={teamData}
            />
            <Spacer h='50px' />

            {/* Membership Section Starts */}
            <Join id='join' />
            {/* Membership Section Ends */}

        </div>
    )
}

export default team
