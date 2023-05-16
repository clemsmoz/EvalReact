import React, { useState } from "react";
import "./extra.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Définir le composant FilmCard prenant un objet film comme argument
export default function FilmCard({ film }) {
    const [showDetails, setShowDetails] = useState(false); // Définir un état pour afficher ou masquer les détails du film

  const toggleDetails = () => { // Fonction qui inverse l'état des détails du film
    setShowDetails(!showDetails);
  };

  // Convertir la note IMDB en une note sur 5
  const rating = film.imdbRating / 2;

  // Créer un tableau contenant les étoiles pleines ou vides en fonction de la note
  const stars = Array(5)
    .fill("")
    .map((_, i) => (
      <span
        key={i}
        className={
          i < rating ? "star full-star text-warning" : "star empty-star text-secondary" 
        }
      >
        &#9733; 
      </span>
    ));

  return ( 
    <div className="card bg-light mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={film.Poster} alt={`${film.Title} poster`} className="img-fluid" /> 
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-center h-100">
              <h2 className="card-title">{film.Title}</h2> 
            <p className="card-text">
              <strong>Year: </strong> {film.Year} 
            </p>
            <p className="card-text">
              <strong>Runtime: </strong> {film.Runtime} 
            </p>
            <p className="card-text">
              <strong>Genre: </strong> {film.Genre} 
            </p>
            <p className="card-text">
              <strong>Actors: </strong> {film.Actors} 
            </p>
            <p className="card-text">
              <strong>Plot: </strong> {film.Plot} 
            </p>
            <div className="rating mb-2">{stars}</div> 
            <p className="card-text">
              <strong>Box Office: </strong> {film.BoxOffice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}