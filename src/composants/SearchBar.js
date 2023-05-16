import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import FilmCard from "./Card";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState(""); // État local pour stocker la valeur de l'input de recherche
  const [movieData, setMovieData] = useState(null); // État local pour stocker les données des films récupérées depuis l'API

  const handleSearch = async () => { // Fonction qui sera appelée lorsqu'on clique sur le bouton de recherche
    try {
      const response = await fetch( // Appel à l'API avec la chaîne de recherche rentrée par l'utilisateur
        `http://www.omdbapi.com/?s=${searchInput}&apikey=2e0f35f5`
      );
      const data = await response.json(); // Conversion de la réponse en objet JSON

      // Pour chaque film dans les résultats de recherche, appeler l'API avec imdbID pour récupérer toutes les données du film
      const movies = await Promise.all(
        data.Search.map(async (movie) => {
          const movieResponse = await fetch(
            `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=2e0f35f5`
          );
          return await movieResponse.json();
        })
      );

      setMovieData(movies); // Stockage des données des films dans l'état local
    } catch (error) { // Gestion d'erreur si la requête ne fonctionne pas
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} /> {/* Input de recherche contrôlé par l'état local */}
      <button onClick={handleSearch}>Search</button> {/* Bouton de recherche qui appelle la fonction handleSearch */}
      {movieData && ( /* Si movieData est non null, on affiche le conteneur de cartes de films */
        <div className="card-container">
          {movieData.map((movie) => (
            <FilmCard key={movie.imdbID} film={movie} /> // On crée une carte pour chaque objet de film dans movieData
          ))}
        </div>
      )}
    </div>
  );
}

