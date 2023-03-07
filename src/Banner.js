import React from 'react';
import axios from './axios';
import requests from './requests';
import { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const req = await axios.get(requests.fetchTrending);
        setMovie(
            req.data.results[Math.floor(Math.random() * req.data.results.length)]
        );
        return req;
    }
    fetchData();
  }, []);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "...": str;
  }

  return (
    <header 
        className="banner"
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}
    >
        <div className='banner__contents'>
            <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className="banner__description">
                {truncate(movie?.overview, 150)}
            </h1>
        </div>

        <div className="banner--fadeBottom" />
        {/** title */}
        {/** div >2 buttons */}
        {/** description */}
    </header>
  )
}

export default Banner;