import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store";
import Movielist from "./Movielist";

const MoviePlayList = () => {
  const [movieName, setMovieName] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);
  const handleAddMovie = () => {
    const action = addMovie(movieName);
    dispatch(action);
    setMovieName("");
  };
  const handleOnChangeMovie = (e) => {
    setMovieName(e.target.value);
  };

  const handleRemoveMovie = (movie) => {
    const action = removeMovie(movie);
    dispatch(action);
  };
  return (
    <div>
      <Movielist movies={movies} onMovieRemove={handleRemoveMovie} />
      <div className="row">
        <form>
          <div className="row">
            <div className="col-2">
              <input
                className="form-control"
                type="text"
                placeholder="Default input"
                id="movie-name"
                value={movieName}
                onChange={handleOnChangeMovie}
              />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-primary" onClick={handleAddMovie}>
                + Add movie
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MoviePlayList;
