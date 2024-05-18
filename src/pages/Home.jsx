import axios from 'axios';

import MovieCard from "../components/MovieCard/MovieCard";
import searchMovies from '../apis/omdb';

import './Home.css';
import { useEffect, useState } from "react";

function Home() {

    const [movieList, setMovieList] = useState([]);

    async function downloadDefaultMovies(...args) {
        const urls = args.map(arg => searchMovies(arg));
        const response = await axios.all(urls.map(url => axios.get(url)));
        const movies = response.map(movie => movie.data.Search);
        setMovieList([].concat(...movies));
    }

    useEffect(() => {
        downloadDefaultMovies('harry', 'avengers', 'batman');
    }, []);

    return (
        <>
        {/* NavBar */}
        {/* MovieList */}
        {/* pagination buttons */}
        <div className="movie-card-wrapper">
            {
                movieList.map(movie =>
                    <MovieCard key={movie.imdbID} {...movie}/>
                )
            }
        </div>
        </>
    )
}

export default Home;