import ApiMovie from './ApiMovie';
import './App.css';
import {useEffect, useState} from 'react';
import MovieSection from './components/MovieSection';

function App() {

  const [moviesList, setMoviesList ] = useState([])

  useEffect(() => {
    const loadMovies = async () => {
      let list = await ApiMovie.getHomesMovies();
      setMoviesList(list);
    }
    loadMovies();
    
  }, [])

  return  (<div className="container">
    <section className="list">
      {moviesList.map((item, key) => (
          <MovieSection key={key} title={item.title} items={item.items} />
        ))}
    </section>
  </div>)
}

export default App;
