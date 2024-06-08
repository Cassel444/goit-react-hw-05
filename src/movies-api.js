import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUzYzYzNThhMTUwZTViMTllY2Q3NzM5YTQ4NGRiMSIsInN1YiI6IjY2NWYwYTBhYWQzMjg3M2UyOTFjMzNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0amlKlrKmjTlT4wZnER-_mwb_K6utjb3SXYT06Qqqzc',
    },
};

export const getTrendingMovies = async () => {
    const url = '/trending/movie/day';

    const response = await axios.get(url, options);
    return response.data.results;
};
export const getMovieDetails = async (movieId) => {
    const url = `/movie/${movieId}`;

    const response = await axios.get(url, options);
    return response.data;
};
export const searchMovies = async (searchQuery) => {
    const url = `/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;

    const response = await axios.get(url, options);
    return response.data;
};

export const getMovieCredits = async (movieId) => {
    const url = `/movie/${movieId}/credits`;

    const response = await axios.get(url, options);
    return response.data;
};

export const getMovieReviews = async (movieId) => {
    const url = `/movie/${movieId}/reviews`;

    const response = await axios.get(url, options);
    return response.data;
};




