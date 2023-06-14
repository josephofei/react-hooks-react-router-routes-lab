import React from "react";
import { directors } from "../data";

function Directors() {


  const movieMaker = (movie) => {
    return <li key={movie}>{movie}</li>
  }

  const directorMaker = (item) => {
    const moveList = item.movies.map(movieMaker)
    return <div key={item.name}>{item.name}
      <ul >
        {moveList}
      </ul>
    </div>
  }
  const list = directors.map(directorMaker)





  return <div>
    <h1>Directors Page</h1>

    {list}


  </div>;
}

export default Directors;
