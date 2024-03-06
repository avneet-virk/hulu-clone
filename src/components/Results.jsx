import React, { useEffect, useState } from "react";
import "./Result.css";
import VideoCard from "./Videos";
import axios from "../axios";
import FlipMove from "react-flip-move";
import { Link } from 'react-router-dom'

function Results({title, selectedOption }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      setLoding(false);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Link to="/">&#8656;Back</Link>
          <h2>{title} Movies</h2>
          <FlipMove>
            {movies.map((movie) => (
              <VideoCard key={movie.id} movie={movie} />
            ))}
          </FlipMove>
        </>
      )}
    </div>
  );
}

export default Results;
