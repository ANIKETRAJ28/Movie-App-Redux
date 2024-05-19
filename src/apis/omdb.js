export function searchMovies(type) {
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${type}`
}

export function searchMoviesById(id) {
    return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`
}