import axios from 'axios';

const KEY = '79f2702b42ceb404ad51283cd44db6ad';

export const fetchTrends = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
  const { data } = await axios({
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return data;
};

export const fetchMovie = async MovieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${MovieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const fetchMovies = async query => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${query}`, {
    params: {
      api_key: KEY,
      query,
    },
  });
  return data;
};

export const fetchCast = async MovieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${MovieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const fetchReviews = async MovieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${MovieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};
