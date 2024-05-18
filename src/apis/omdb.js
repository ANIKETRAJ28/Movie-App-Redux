function searchMovies(type) {
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${type}`
}

export default searchMovies;