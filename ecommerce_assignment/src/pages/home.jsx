import React, { useState, useEffect } from "react";
let favMovie = [];

const Home = () => {
  const [movie, setMovie] = useState({});
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&t=${searchText}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchText !== "") {
      fetchMovie();
    }
  }, [searchText]);

  return (
    <div>
      <div className="page-head">
        <div className="page-title">Movies</div>
        <div className="search-container">
          <form className="search-form">
            <input
              type="text"
              className="search-field"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search your favourite movie here..."
            />
          </form>
        </div>
      </div>
      <div className="test">
        <img
          src={movie.Poster}
          alt="Movie-Poster"
          className="content-img"
          onClick={favMovie.push(movie)}
        />
      </div>
      <div className="favText">Favourites</div>
      <div className="favList">
        {favMovie.map((e) => {
          return (
            <img src={e.Poster} alt="Movie-Poster" className="content-img" />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
