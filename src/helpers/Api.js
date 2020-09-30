import axios from 'axios';

class Api {
  static BASE_URL = 'http://localhost:3001';

  static getMovies = () => axios.get(`${Api.BASE_URL}/movies`);

  static getMovieById = (id) => axios.get(`${Api.BASE_URL}/movies/${id}`);

  static updateMovieData = (id, data) => axios.put(`${Api.BASE_URL}/movies/${id}`, data, {
    headers: { 'Content-Type': 'application/json' }
  });

  static deleteMovie = (id) => axios.delete(`${Api.BASE_URL}/movies/${id}`);

  static getActors = () => axios.get(`${Api.BASE_URL}/actors`);

  static logIn = (userData) => axios.get(`${Api.BASE_URL}/users`, {
    params: userData
  });

  static register = (userData) => axios.post(`${Api.BASE_URL}/users`, userData, {
    headers: { 'Content-Type': 'application/json' }
  });
}

export default Api;
