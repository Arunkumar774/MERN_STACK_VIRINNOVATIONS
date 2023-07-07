import React from 'react';
import '../App.css';

const MovieCard = (props) => {
  const movie = props.movie;
  
  return (
    <div className='card-container'>
      <img
        src='https://media.harrypotterfanzone.com/harry-potter-movie-posters-header.jpg'
        alt='Movies'
        height={200}
      />
      <div className='desc'>
        <h2>{movie.movie_name}</h2>
        <h3>{movie.release_year}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;