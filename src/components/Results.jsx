import React, { useEffect, useState } from "react";
import "./Result.css";
import VideoCard from "./Videos";
import axios from "../axios";
import { Link } from "react-router-dom";

function Results() {
  const [movies, setMovies] = useState([]);
  const [copyMovies, setCopyMovies] = useState([]);
  const [loading, setLoding] = useState(false);
  const [search, setSearch] = useState("");
  const title = localStorage.getItem('title') || ''

  useEffect(() => {
    setLoding(true);
    async function fetchData() {
      const selectApi = localStorage.getItem('requestType') || ''
      const request = await axios.get(selectApi);
      setMovies(request.data.results);
      setCopyMovies(request.data.results);
      setLoding(false);
      return request;
    }
    fetchData();
  }, []);

  const handleSearch = (value) => {
    const moviesData = [...copyMovies];
    if (value === "") {
      setMovies(copyMovies);
    } else {
      const searchData = moviesData.filter((data) =>
        data.original_title.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(searchData);
    }
  };

  return (
    <div className="results">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="topbar">
            <div>
              <Link to="/">&#8656;Back</Link>
            </div>
            <div>
              <input
                type="text"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={() => handleSearch(search)}>search</button>
            </div>
          </div>

          <h2>{title} Movies</h2>
          <div>
            {movies.map((movie) => (
              <VideoCard key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Results;
