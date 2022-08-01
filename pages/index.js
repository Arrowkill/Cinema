import React from 'react';
import { FooterBanner, HeroBanner, Navbar, Feature, } from '../components';


export default function Home() {
  const page = {
    paddingTop: '60px'
  }
  return (
    <div>
      <Navbar />
      <div style={page}>
        <HeroBanner />
        <Feature />
        <FooterBanner />
      </div>
    </div>
  )
}