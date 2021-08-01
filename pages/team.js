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
            <div className="section">
                <div className='pioneers' >
                    <p>The Pioneers</p>
                    <img src="/assets/icons/pioneers.png" alt="Pioneers" />
                </div>

                <Spacer h='50px' />
                <Department
                    title='Management'
                    data={teamData}
                />
                <Department
                    title='Marketing'
                    data={teamData}
                />
                <Department
                    title='Design'
                    data={teamData}
                />
                <Department
                    title='Content'
                    data={teamData}
                />
                <Department
                    title='Operations'
                    data={teamData}
                />
            </div>

            {/* Membership Section Starts */}
            <Join id='join' />
            {/* Membership Section Ends */}

        </div>
    )
}

export default team
