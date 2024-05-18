import { /*useRef*/ useState } from 'react';
import './NavBar.css';

import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';

function NavBar() {

    // const resultListRef = useRef(null);
    const [searchResult, setSearchResult] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = useMovieList(searchTerm);

    return (
        <div className="nav-bar-wrapper">
            <div>Movie Base</div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder='Search movie...'
                    onFocus={() => {
                        // resultListRef.current.style.display = "block";
                        setSearchResult(true);
                    }}
                    onBlurCapture={() => {
                        // resultListRef.current.style.display = "none";
                        setSearchResult(false);
                    }}
                    // onChange={(e) => {
                    //     setSearchTerm(e.target.value);
                    // }}
                    onChange={useDebounce((e) => {
                        setSearchTerm(e.target.value);
                    })}
                />
                <div id='result-list' /*ref={resultListRef}*/ style={{display: `${searchResult ? 'block' : 'none'}`}}>
                    {
                        movieList.length > 0 && movieList.map(movie => (
                            <div className='autocomplete-result' key={movie.imdbID}>{movie.Title}</div>
                        ))
                    }
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}

export default NavBar;