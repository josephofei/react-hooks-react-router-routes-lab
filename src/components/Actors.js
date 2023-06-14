import React from "react";
import { actors } from "../data";

function Actors() {


  // const movieList = (genre, index) => {
  //   return <li key={index}>{genre}</li>
  // }

  // const movieMaker = (movie) => {
  //   const genreList = movie.genres.map(movieList)

  //   return <div key={movie.time}>
  //     {movie.title}
  //     {movie.time}
  //     <ul>{genreList}</ul>
  //   </div>
  // }

  // const list = movies.map(movieMaker)


  const actorList = (act, index) => {
    return <li key={index}>{act}</li>
  }

  const actorMaker = (actor, index) => {
    const actList = actor.movies.map(actorList)
    return <div key={index}>
      {actor.name}
      <ul>
        {actList}
      </ul>
    </div>
  }

  const list = actors.map(actorMaker)

  return <div>

    <h1>Actors Page</h1>
    {list}
  </div>;
}

export default Actors;
