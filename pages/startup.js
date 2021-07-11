import React, { useEffect, useState } from 'react'
// Hero Section
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Startup/heroSection.json'
// About Section
import About from '../components/Screens/Startup/About';
// Why Startup Experience Section
import Cards from '../components/Screens/Startup/Cards';
import startupCardData from '../data/Startup/cardData.json'
// Details
import DetailRC from '../components/Utilities/DetailRC';
import dataRC from '../data/Startup/detailRC.json';
// General Utility
import Spacer from '../components/Layout/Spacer';
import Join from '../components/Utilities/Join';

const Startup = () => {
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

            <Spacer h='50px' />

            {/* About Section Starts */}
            <About id='about' />
            {/* About Section Ends */}

            {/* <Spacer h='100px' />*/}

            {/* DetailRC Starts */}
            {/*<DetailRC
                generalTitle={dataRC[0].title.general}
                coloredTitle={dataRC[0].title.highlight}
                content={dataRC[0].content}
                img={dataRC[0].img}
                btnPri={dataRC[0].btns.primary}
                btnSec={dataRC[0].btns.secondary}
                rev={dataRC[0].rev}
                alt={dataRC[0].alt}
            />*/}
            {/* DetailRC Ends */}


            <Spacer h='50px' />

            {/* Why Startup Experience Starts */}
            <Cards title='Why try this out?' data={startupCardData} />
            {/* Why Startup Experience Ends */}

            <Spacer h='50px' />
            <div
                className='section d-flex d-col'
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h2
                    style={{
                        textAlign: 'center'
                    }}
                >What are you waiting for?</h2>
                <br />
                <div className='d-flex' >
                    <a
                        href="https://www.notion.so/doconation/Startup-Experience-55f71ca6adfa4f3fa2e073e26fc9fe46"
                        className="btn btn-primary"
                        target='_blank'
                    >Apply Now</a>
                </div>
            </div>
            <Spacer h='50px' />
            {/* Membership Section Starts */}
            <Join id='join' />
            {/* Membership Section Ends */}
        </div>)

}

export default Startup
