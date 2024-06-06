import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const ACCESS_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGUzYzYzNThhMTUwZTViMTllY2Q3NzM5YTQ4NGRiMSIsInN1YiI6IjY2NWYwYTBhYWQzMjg3M2UyOTFjMzNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0amlKlrKmjTlT4wZnER-_mwb_K6utjb3SXYT06Qqqzc';

export const getTrendingMovies = async () => {
    const url = '/trending/movie/day';
    const options = {
        headers: {
            Authorization: ACCESS_KEY,
        }
    };
    const response = await axios.get(url, options);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const url = '/search/movie';
    const options = {
        params: { query },
        headers: {
            Authorization: ACCESS_KEY,
        }
    };
    const response = await axios.get(url, options);
    return response.data;
};

export const getMovieDetails = async (movieId) => {
    const url = `/movie/${movieId}`;
    const options = {
        params: {
            append_to_response: 'genres,overview,popularity,title'
        },
        headers: {
            Authorization: ACCESS_KEY,
        }
    };
    const response = await axios.get(url, options);
    return response.data;
};

export const getMovieCredits = async (movieId) => {
    const url = `/movie/${movieId}/credits`;
    const options = {
        headers: {
            Authorization: ACCESS_KEY,
        }
    };
    const response = await axios.get(url, options);
    return response.data;
};

export const getMovieReviews = async (movieId) => {
    const url = `/movie/${movieId}/reviews`;
    const options = {
        headers: {
            Authorization: ACCESS_KEY,
        }
    };
    const response = await axios.get(url, options);
    return response.data;
};




