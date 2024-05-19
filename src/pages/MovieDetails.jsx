import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { searchMoviesById } from "../apis/omdb";

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
        <>
            {
            movie && <MovieCard
                        Title={movie.Title}
                        Year={movie.Year}
                        Type={movie.Type}
                        Poster={movie.Poster}
                    />
            }
        </>
    )
}

export default MovieDetails;