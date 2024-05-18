import axios from "axios";
import { useEffect, useState } from "react";
import searchMovies from "../apis/omdb";

function useMovieList(...args) {
    const [movieList, setMovieList] = useState([]);

    async function downloadDefaultMovies(...args) {
        try {
            const urls = args.map(arg => searchMovies(arg));
            const response = await axios.all(urls.map(url => axios.get(url)));
            if(response[0].data.Error) {
                setMovieList([]);
            } else {
                const movies = response.map(movie => movie.data.Search);
                setMovieList([].concat(...movies));
            }
        } catch (error) {
            console.log("api request failed");
        }
    }

    useEffect(() => {
        downloadDefaultMovies(...args);
    }, [...args]);

    return {movieList};
}

export default useMovieList;