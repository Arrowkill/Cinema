import React from 'react';
import { Movie, FooterBanner, HeroBanner } from '../components';


const Home = ({ movies, bannerData}) => {
  return (
    <div>
      <HeroBanner />
        
    <div className="products-heading">
      <h2>Featured Movies</h2>
      <p>Find Showtimes</p>
    </div>

    <div className="products-container">
      {movies?.map((movie) => movie.name)}
    </div>

    <FooterBanner />
    </div>
  )
}

export default Home;