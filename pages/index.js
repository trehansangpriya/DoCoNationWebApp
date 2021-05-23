import React from "react"
import { WebProvider } from '../contexts/WebConext'
import Layout from './../components/Layout/Layout';

export default function Home() {

  return (
    <WebProvider>
      <Layout>
        <div className="section">
          <h1>A New Age Student Community</h1>
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <h2>What is <span className="c-blue">DoCoNation?</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corporis quae quis, itaque dolorum quam odio. Distinctio sunt numquam rem sequi quo, autem esse sed debitis in repellendus quibusdam cum?</p>
          <a href="" className="btn btn-blue">Join Now</a>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </WebProvider>
  )
}