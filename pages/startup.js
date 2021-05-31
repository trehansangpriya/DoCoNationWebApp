import React from 'react'
//Global Context
import { WebProvider } from '../contexts/WebConext';
// Screen Layout - Nav, Footer, Meta
import Layout from './../components/Layout/Layout';
// Hero Section
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Startup/heroSection.json'
// About Section
import About from '../components/Screens/Startup/About';
// Why Startup Experience Section
import Cards from '../components/Screens/Startup/Cards';
import startupCardData from '../data/Startup/cardData.json'
// Features Section
import FeatureCards from './../components/Utilities/FeatureCards/index';
import domainData from '../data/Startup/features.json'
// Details
import DetailRC from '../components/Utilities/DetailRC';
import dataRC from '../data/Startup/detailRC.json';
// General Utility
import Spacer from '../components/Layout/Spacer';

const Startup = () => {
    return (
        <WebProvider>
            <Layout>
                {/* Hero Section Starts */}
                <HeroSection
                    content={heroSectionData.content}
                    title={heroSectionData.title}
                    img={heroSectionData.img}
                    link={heroSectionData.link} />
                {/* Hero Section Ends */}

                <Spacer h='50px' />

                {/* About Section Starts */}
                <About id='about' />
                {/* About Section Ends */}

                <Spacer h='100px' />

                {/* Domains Starts */}
                <FeatureCards
                    title='Choose a domain that you like!'
                    data={domainData}
                />
                {/* Domains Ends */}

                <Spacer h='100px' />

                {/* DetailRC Starts */}
                <DetailRC
                    generalTitle={dataRC[0].title.general}
                    coloredTitle={dataRC[0].title.highlight}
                    content={dataRC[0].content}
                    img={dataRC[0].img}
                    btnPri={dataRC[0].btns.primary}
                    btnSec={dataRC[0].btns.secondary}
                    rev={dataRC[0].rev}
                    alt={dataRC[0].alt}
                />
                {/* DetailRC Ends */}


                <Spacer h='100px' />

                {/* Why Startup Experience Starts */}
                <Cards title='Why try this out?' data={startupCardData} />
                {/* Why Startup Experience Ends */}

                <Spacer h='80px' />
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
                        <a href="#" className="btn btn-primary">Apply Now</a>
                    </div>
                </div>
                <Spacer h='50px' />

            </Layout>
        </WebProvider>
    )
}

export default Startup
