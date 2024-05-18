import { /*useRef*/ useState } from 'react';
import './NavBar.css';

function NavBar() {

    // const resultListRef = useRef(null);
    const [searchResult, setSearchResult] = useState(false);

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
                />
                <div id='result-list' /*ref={resultListRef}*/ style={{display: `${searchResult ? 'block' : 'none'}`}}>
                    <div>result 1</div>
                    <div>result 2</div>
                    <div>result 3</div>
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}

export default NavBar;