import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const data = props?.data || {};
  console.log(data.Poster);
  return (
    <>
      <div className="card-item">
        <Link to={`/movie/${data.imdbID}`}>
          <div className="card-inner">
            <div className="card-top">
              {data.poster !== "N/A" ? (
                <img src={data.Poster} alt={data.Title} />
              ) : (
                <> No Poster </>
              )}
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <h4>{data.Title}</h4>
                <p>{data.Year}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
