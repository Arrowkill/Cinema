import React from 'react';
import { FooterBanner, HeroBanner, Navbar, Feature, } from '../components';


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Feature />
      <FooterBanner />
    </div>
  )
}