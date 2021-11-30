import React, {useState, useEffect} from 'react';
import AnimeItem from './AnimeItem';

const Anime = () => {
    const [anime, setAnime] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
            fetch('https://api.jikan.moe/v3/anime/1/recommendations')
            .then(response => response.json())
            .then(data => {
                setAnime(data.recommendations)
                });
        }, []
    );

    const  handleSubmit = (e) => {
    e.preventDefault();

    // hit TMDB Rest API endpoint to search for a movie
    text.replace(/ /g,"_");
    fetch(`https://api.jikan.moe/v3/search/anime?q=${text}&page=1&genre_exclude=12`)
    .then(response => response.json())
    .then(data => setAnime(data.results));
    setText('');
  }

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search Anime</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" onChange={handleChange} value={text} />

                </form>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    { anime.map(anime =><AnimeItem key={anime.mal_id} anime={anime} />) }
                </div>
            </div>
        </section>
    );
}

export default Anime;