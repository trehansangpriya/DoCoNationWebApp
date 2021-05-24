import React from 'react';
import { WebProvider } from '../contexts/WebConext';
import Layout from './../components/Layout/Layout';
import HeroSection from '../components/Utilities/HeroSection';
import heroSectionData from '../data/Home/heroSection.json'
import Membership from '../components/Screens/Home/Membership';
import membershipData from '../data/Home/membershipData.json';
import About from '../components/Screens/Home/About';
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
        <Spacer h='50px' />
        {/* Membership Section Starts */}
        <Membership data={membershipData} />
        {/* Membership Section Ends */}
      </Layout>
    </WebProvider>
  );
}
