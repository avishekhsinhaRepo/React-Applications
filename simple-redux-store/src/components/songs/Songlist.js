import Song from "./Song";
function Songlist({ songs ,onSongRemove}) {
  const songList = songs.map((song) => <Song song={song} onSongRemove={onSongRemove} />);
  return (
    <div className="row">
      <div className="mb-3">
        <ul className="list-group">{songList}</ul>
      </div>
    </div>
  );
}
export default Songlist;
