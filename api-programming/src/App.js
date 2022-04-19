import {useEffect, useState} from 'react'
import './App.css';
import Config from './Config.json'

function createRequestUrl (pSearchTerm) {
  return `${Config.MOVIE_API_URL}${Config.MOVIE_API_KEY}&s${pSearchTerm}`
}

function App() {

  const [data, setData] = useState([]);


  useEffect(() => {

    async function getData () {

    const response = await fetch( createRequestUrl('batman'));
  
    const incominData = await response.json();

    setData(incominData);
    }

  getData();
  });


  return (
    <div className="App">
      {
        data.Search.map((mv) => <Movie movie={mv}/>)
      }
    </div>
  );
}

export default App;


function Movie(props){
  const movie = props.movie;
  return (
    <>
      <h1>{movie.Title}, {movie.Year}</h1>
      <img src={movie.Poster} />
    </>   
  );
}