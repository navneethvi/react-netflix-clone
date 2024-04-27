import React, { useEffect, useState } from "react";
import { imageUrl } from "../constants/constants";
import axios from "../axios";

function RowPost(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        const movie = response.data.results;
        setMovies(movie);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={props.isSmall ? "small-poster-img" : "poster-img"}
            src={movie ? imageUrl + movie.backdrop_path : ""}
            alt="Poster"
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
