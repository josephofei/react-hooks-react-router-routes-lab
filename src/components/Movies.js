import React from "react";
import { movies } from "../data";

function Movies() {


  // const movieMaker = (movie) => {
  //   return <li key={movie}>{movie}</li>
  // }

  // const directorMaker = (item) => {
  //   const moveList = item.movies.map(movieMaker)
  //   return <div key={item.name}>{item.name}
  //     <ul >
  //       {moveList}
  //     </ul>
  //   </div>
  // }
  // const list = directors.map(directorMaker)


  const movieList = (genre, index) => {
    return <li key={index}>{genre}</li>
  }

  const movieMaker = (movie) => {
    const genreList = movie.genres.map(movieList)

    return <div key={movie.time}>
      {movie.title}
      {movie.time}
      <ul>{genreList}</ul>
    </div>
  }

  const list = movies.map(movieMaker)

  return <div>
    <h1>Movies Page</h1>
    {list}

  </div>;
}

export default Movies;
