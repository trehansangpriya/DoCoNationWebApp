import React from "react"
import HeroSection from "../components/Utilities/HeroSection";
import { WebProvider } from '../contexts/WebConext'
import Layout from './../components/Layout/Layout';
import heroSectionData from '../data/Home/heroSection.json'

export default function Home() {

  return (
    <WebProvider>
      <Layout>
        <HeroSection
          content={heroSectionData.content}
          title={heroSectionData.title}
          img={heroSectionData.img}
          link={heroSectionData.link} />
      </Layout>
    </WebProvider>
  )
}