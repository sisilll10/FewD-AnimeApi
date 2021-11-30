import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnimeDetails from '../components/AnimeDetails';


const Details = () => {
  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true)
  const { mal_id } = useParams();

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/anime/${mal_id}`)
    .then(response => response.json())
    .then(data => {
      setAnime(data);
      // console.log(data.results)
      setLoading(false);
      });
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      {loading ? "loading" : <AnimeDetails key={mal_id} anime={anime} />}
      <Footer />
    </>
  );
}

export default Details;
