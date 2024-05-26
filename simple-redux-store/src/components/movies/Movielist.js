import Movie from "./Movie";
function Movielist({ movies,onMovieRemove }) {
  const movieList = movies.map((movie , index) => <Movie movie={movie}  key={index} onMovieRemove={onMovieRemove}/>);
  return (
    <div className="row">
      <div className="mb-3">
        <ul className="list-group">{movieList}</ul>
      </div>
    </div>
  );
}
export default Movielist;
