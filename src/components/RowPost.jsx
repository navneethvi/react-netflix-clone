import React, { useEffect, useState } from "react";
import { imageUrl } from "../constants/constants";
import { API_KEY } from "../constants/constants";
import axios from "../axios";
import Youtube from "react-youtube"
import Shimmer from "./Shimmer";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        const movie = response.data.results;
        setMovies(movie);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false)
      });
  }, [props.url]);


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieClick = (id) => {
    console.log(id);
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
        console.log(response);
        if(response.data.results.length !== 0){
            setUrlId(response.data.results[0])
        }else {
            console.log("Array empty");
        }
    })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      {isLoading ? (
        <Shimmer />  
      ) : (
        <div className="posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleMovieClick(movie.id)}
              className={props.isSmall ? "small-poster-img" : "poster-img"}
              src={movie ? imageUrl + movie.backdrop_path : ""}
              alt="Poster"
            />
          ))}
        </div>
      )}
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
