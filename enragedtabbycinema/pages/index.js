import React from 'react';
import { FooterBanner, HeroBanner, Navbar, Feature, } from '../components';


const Home = ({ movies, bannerData}) => {
  const page = {
    backgroundColor: 'white'
  }
  return (
    <div style={page}>
      <Navbar />
      <HeroBanner />
        
      <Feature />

      <FooterBanner />
    </div>
  )
}

export default Home;