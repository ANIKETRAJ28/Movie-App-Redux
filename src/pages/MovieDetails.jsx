import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchMoviesById } from "../apis/omdb";
import { Rating } from '@smastrom/react-rating';

import './MovieDetails.css';
import '@smastrom/react-rating/style.css';

function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    
    async function downloadMovie() {
        const response = await axios.get(searchMoviesById(id));
        setMovie(response.data);
    }

    useEffect(() => {
        downloadMovie();
    }, [id])

    return (
        <div className="movie-details-wrapper">
            {
            movie && <MovieCard
                        Title={movie.Title}
                        Year={movie.Year}
                        Type={movie.Type}
                        Poster={movie.Poster}
                        imdbID={movie.imdbID}
                    />
            }
            {
                movie && <div className="movie-details-extra-details">
                    <div>Plot: {movie.Plot}</div>
                    <div>Actors: {movie.Actors.split(',').map(actor => {
                        return <span className="chips" key={actor}>{actor}</span>
                    })}</div>
                    <div>Genre: {movie.Genre.split(',').map(genre => {
                        return <span className="chips" key={genre}>{genre}</span>
                    })}</div>
                    <div><Rating items={10} value={Math.floor(movie.imdbRating)} style={{maxWidth: 250}}/></div>
                </div>  
            }
        </div>
    )
}

export default MovieDetails;