import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function ShowMovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowMovieList');
      });
  }, []);

  const movieList =
    movies.length === 0
      ? 'there is no movie record!'
      : movies.map((movie, k) => <MovieCard movie={movie} key={k} />);

  function handleSortAZ(){
    const arr = [...movies].sort((a, b) => (a.movie_name > b.movie_name ? 1 : -1));
    console.log(arr);
    setMovies(arr);
  }
  function handleSortZA(){
    const arr = [...movies].sort((a, b) => (a.movie_name > b.movie_name ? -1 : 1));
    console.log(arr);
    setMovies(arr);
  }

  return (
    <div className='ShowMovieList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Movies List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/add-movie'
              className='btn btn-outline-warning float-right'
            >
              + Add New Movie
            </Link>
            <br />
            <br />
            <hr />
            
            <button onClick={handleSortAZ} className='btn btn-success '>A - Z</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleSortZA} className='btn btn-success '>Z - A</button>
          </div>
        </div>

        <div className='list'>{movieList}</div>
      </div>
    </div>
  );
}

export default ShowMovieList;