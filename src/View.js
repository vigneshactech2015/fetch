import React from 'react';
import classes from './View.module.css';
function View(props) {
  return (
      <div>
{props.movies.map((movie)=>{
    return(
        <div className={classes.row}>
        <div className={classes.container}>
        <h2 className={classes.moviename}>{movie.name}</h2>
        <img src={movie.poster} className={classes.photo}/>
        <p className={classes.summary}>{movie.summary}</p>
        <h4 className={classes.rating}>{movie.rating}</h4>
        </div>
        </div>
    )
})}
</div>
  )
}

export default View;