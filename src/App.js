import ApiMovie from './ApiMovie';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [movieList, setMovieList ] = useState([])

  useEffect(() => {
    const loadMovies = async () => {
      let moviesList = await ApiMovie.getHomesMovies();
      console.log(moviesList);
    }
    loadMovies();
    
  }, [])

  return  <div className="App">HELLO WORLD</div>
}

export default App;
