import React, { useEffect, useState } from "react";
import axios from "../axios";
import { API_KEY, imageUrl } from "../constants/constants";

function Banner() {
  const [movie, setMovie] = useState(null);
  const [movieIndex, setMovieIndex] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          const results = response.data.results[0];
          setMovie(results);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    fetchData();

    const intervalId = setInterval(() => {
      setMovieIndex((prevIndex) => (prevIndex + 1) % 20);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [movieIndex]);

  useEffect(() => {
    if (movies.length > 0) {
      setMovies(movies[movieIndex]);
    }
  }, [movieIndex, movies]);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-button">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-botton"></div>
    </div>
  );
}

export default Banner;
