import { /*useRef*/ useState } from 'react';
import './NavBar.css';

import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

function NavBar() {

    // const resultListRef = useRef(null);
    const [searchResult, setSearchResult] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {movieList} = useMovieList(searchTerm);
    const navigator = useNavigate();
    const {theme, setTheme} = useContext(ThemeContext);

    function handleAutoComplete(e, id) {;
        navigator(`movie/${id}`);
    }

    function updateTheme() {
        if(theme == 'dark') {
          setTheme('light');
          localStorage.setItem('app-theme', 'light');
        } else {
          setTheme('dark');
          localStorage.setItem('app-theme', 'dark');
        }
      }

    return (
        
        <div className="nav-bar-wrapper">
            <div><Link to={`/`}>Movie Base</Link></div>
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
                            <div className='autocomplete-result' onMouseDown={(e) => handleAutoComplete(e, movie.imdbID)} key={movie.imdbID}>{movie.Title}</div>
                        ))
                    }
                </div>
            </div>
            <div onClick={updateTheme}>
                <FontAwesomeIcon className='theme-icon' icon={theme == 'dark' ? faSun : faMoon}/>
            </div>
        </div>
    )
}

export default NavBar;