import React from 'react';
import Button from '../components/Utilities/Button';
import { WebProvider } from '../contexts/WebConext';
import Layout from './../components/Layout/Layout';
import dataRC from '../data/Home/detailRC.json';
import DetailRC from '../components/Utilities/DetailRC';
export default function Home() {
  return (
    <WebProvider>
      <Layout>
        <div className="section">
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
          <DetailRC
            generalTitle={dataRC[1].title.general}
            coloredTitle={dataRC[1].title.highlight}
            content={dataRC[1].content}
            img={dataRC[1].img}
            btnPri={dataRC[1].btns.primary}
            rev={dataRC[1].rev}
            alt={dataRC[1].alt}
          />
        </div>
      </Layout>
    </WebProvider>
  );
}
