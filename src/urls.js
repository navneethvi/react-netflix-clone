import { API_KEY } from "./constants/constants";

const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`;
const action = `discover/movie?api_key=${API_KEY}&with_genres=28`;
const horror = `discover/movie?api_key=${API_KEY}&with_genres=27`;
const romance = `discover/movie?api_key=${API_KEY}&with_genres=10749`;

export { originals, action, horror, romance };
