import React from 'react'
//Global Context
import { WebProvider } from '../contexts/WebConext';
// Screen Layout - Nav, Footer, Meta
import Layout from './../components/Layout/Layout';
// Hero Section
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Events/heroSection.json'
import Spacer from '../components/Layout/Spacer';
import DetailRC from '../components/Utilities/DetailRC';
import dataRC from '../data/Events/detailRC.json';
const events = () => {
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
                <DetailRC
                    generalTitle={dataRC[0].title.general}
                    coloredTitle={dataRC[0].title.highlight}
                    content={dataRC[0].content}
                    img={dataRC[0].img}
                    rev={dataRC[0].rev}
                    alt={dataRC[0].alt}
                />
            </Layout>
        </WebProvider>
    )
}

export default events
