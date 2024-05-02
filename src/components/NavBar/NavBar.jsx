import './NavBar.css';

function NavBar() {
    return (
        <div className="nav-bar-wrapper">
            <div>Movie Base</div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder='Search movie...'
                />
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}

export default NavBar;