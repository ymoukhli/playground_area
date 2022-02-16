import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Movie from "./app/components/Movie"
function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, [])
  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c13e72695e8dd2808f068ebe812801c&language=en-US&page=1')
    console.log(data);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  }
  return (
    <div className="App">
      <h1>HELLO</h1>
      <div className="popularMovies">
        {popular.map(movie => <Movie key={movie.id} movie={movie}/>)}
      </div>
    </div>
  );
}

export default App;
