function Song({ song, onSongRemove }) {
  const handleOnClick = () => {
    onSongRemove(song);
  };
  return (
    <li className="list-group">
      <div className="row">
        <div className="col-2">{song}</div>
        <div className="col-2">
          <button type="button" className="btn btn-secondary" onClick={handleOnClick}>
            X
          </button>
        </div>
      </div>
    </li>
  );
}
export default Song;
