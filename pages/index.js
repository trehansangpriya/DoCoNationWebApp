import React from 'react';
//Global Context
import { WebProvider } from '../contexts/WebConext';
// Screen Layout - Nav, Footer, Meta
import Layout from './../components/Layout/Layout';
// Hero Section
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Home/heroSection.json'
// About Section
import About from '../components/Screens/Home/About';
// Membership Section
import Membership from '../components/Screens/Home/Membership';
import membershipData from '../data/Home/membershipData.json';
// Features Section
import FeatureCards from "../components/Utilities/FeatureCards";
import featureCardData from '../data/Home/features.json'
// Details
import DetailRC from '../components/Utilities/DetailRC';
import dataRC from '../data/Home/detailRC.json';
// General Utility
import Spacer from '../components/Layout/Spacer';

export default function Home() {
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

        {/* Feature Section Starts */}
        <FeatureCards title="Why Be A Part Of It?" data={featureCardData} />
        {/* Feature Section Ends */}

        <Spacer h='50px' />

        {/* Events & Podcasts */}
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
        {/* Events & Podcasts */}

        <Spacer h='50px' />

        {/* Membership Section Starts */}
        <Membership data={membershipData} />
        {/* Membership Section Ends */}

        <Spacer h='50px' />

        {/* Startup Experience */}
        <DetailRC
          generalTitle={dataRC[1].title.general}
          coloredTitle={dataRC[1].title.highlight}
          content={dataRC[1].content}
          img={dataRC[1].img}
          btnPri={dataRC[1].btns.primary}
          rev={dataRC[1].rev}
          alt={dataRC[1].alt}
        />
        {/* Startup Experience */}

        <Spacer h='50px' />
      </Layout>
    </WebProvider>
  );
}
