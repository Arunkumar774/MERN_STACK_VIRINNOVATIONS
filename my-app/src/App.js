import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AddMovie from './components/AddMovie';
import ShowMovieList from './components/ShowMovieList';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ShowMovieList />} />
          <Route path='/add-movie' element={<AddMovie />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;