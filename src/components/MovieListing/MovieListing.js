import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./MovieListing.scss";

const MovieListing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {movies?.Search?.map((movie, index) => (
              <MovieCard key={index} data={movie} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="movie-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>
            {shows?.Search?.map((show, index) => (
              <MovieCard key={index} data={show} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
