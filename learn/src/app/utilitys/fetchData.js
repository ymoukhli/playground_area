export const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c13e72695e8dd2808f068ebe812801c&language=en-US&page=1')
    const movies = await data.json();
    return movies.results;
  }