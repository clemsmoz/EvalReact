import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FilmDetails({ film }) {
  return (
    <div>
      <h2>{film.Title}</h2>
      <p>{film.Plot}</p>
      <p><strong>Actors: </strong>{film.Actors}</p>
      <p><strong>Box Office: </strong>{film.BoxOffice}</p>
          <p><strong>Year: </strong>{film.Year}</p>
          <p><strong>Runtime: </strong>{film.Runtime}</p>
          <p><strong>Genre: </strong>{film.Genre}</p>
          <p><strong>Actors: </strong>{film.Actors}</p>
          <p><strong>Plot: </strong>{film.Plot}</p>
          <p><strong>Box Office: </strong>{film.BoxOffice}</p>
        </div>
  );
}