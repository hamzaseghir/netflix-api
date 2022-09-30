import React from 'react';
import './MovieSection.css';

function MovieSection({ title, items }) {
    console.log(items.results);
  return  (
  <div className="movieRow">
    <h2>{title}</h2>
    <div className="movieRow--listarea">
        {items.results.length > 0 && 
        items.results.map((item, key) => (
            
                <img 
                alt="film-poster"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            
        ))}
    </div>
  </div>)
}

export default MovieSection