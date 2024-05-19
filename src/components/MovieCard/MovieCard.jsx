import "./MovieCard.css";

import { useNavigate } from 'react-router-dom';

function MovieCard({Title, Year, Type, Poster, imdbID}) {

    const navigator = useNavigate();    
    function handleClick() {
        navigator(`/movie/${imdbID}`);
    }

    return (
        <div onClick={handleClick} className='movie-wrapper'>
            <div className="movie-image">
                <img src={Poster} alt="poster" />
            </div>
            <div className="movie-title">
                <span>{Title}</span>
            </div>
            <div className="movie-year">
                <span>Released on: {Year}</span>
            </div>
            <div className="movie-type">
                <span>Type: {Type}</span>
            </div>
        </div>
    )
}

export default MovieCard;