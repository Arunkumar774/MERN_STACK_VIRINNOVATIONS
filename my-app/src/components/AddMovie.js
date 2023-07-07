import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AddMovie = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    movie_name: '',
    release_year: '',
    description: ''
  });

  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/movies', movie)
      .then((res) => {
        setMovie({
          movie_name: '',
          release_year: '',
          description: ''
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in AddMovie!');
      });
  };

  return (
    <div className='AddMovie'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Movie List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Movie</h1>
            <p className='lead text-center'>Enter movie details</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Movie Name'
                  name='movie_name'
                  className='form-control'
                  value={movie.movie_name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Release Year'
                  name='release_year'
                  className='form-control'
                  value={movie.release_year}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this movie'
                  name='description'
                  className='form-control'
                  value={movie.description}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;