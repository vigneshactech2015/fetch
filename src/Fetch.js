import React,{useState,useCallback,useEffect} from 'react';
import View from './View';
const Fetch=()=> {
 const[movies,setMovies]=useState([]);

 const fetchMoviesHandler = useCallback(async () => {
  
    const response = await fetch('https://crudusingnodeandexpress.herokuapp.com/movies');
    const data = await response.json();
    setMovies(data);
  }, []);

useEffect(() => {
  fetchMoviesHandler();
},[]);  

    return(
    <div>
    <View movies={movies}/>
    </div>
    )}

export default Fetch;