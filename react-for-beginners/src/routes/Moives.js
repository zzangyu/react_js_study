import { useEffect, useState } from "react";
import ShowMovies from "../components/ShowMovies";
import styles from "../Movies.module.css";

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    console.log(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  /* old version
  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  */

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div id="">
          <div>
            {movies.map((movie) => (
              <ShowMovies
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
