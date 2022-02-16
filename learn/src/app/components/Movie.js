const Movie = ({movie}) => {
    return (<div>
        <div>{movie.title}</div>
        <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=""></img>
    </div>)
}

export default Movie;