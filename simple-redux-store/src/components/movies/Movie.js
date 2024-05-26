function Movie({ movie, onMovieRemove }) {
  const handleOnClick = () => {
    onMovieRemove(movie);
  };
  return (
    <li className="list-group">
      <div className="row">
        <div className="col-2">{movie}</div>
        <div className="col-2">
          <button type="button" className="btn btn-secondary" onClick={handleOnClick}>
          X
          </button>
        </div>
      </div>
    </li>
  );
}
export default Movie;
