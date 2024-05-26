import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../store";
import Songlist from "./Songlist";

const SongPlayList = () => {
  const songs = useSelector((state) => state.song);
  const [songName, setSongName] = useState("");
  const dispatch = useDispatch();
  const handleAddSong = () => {
    const action = addSong(songName);
    dispatch(action);
    setSongName("");
  };
  const handleOnChangeSong = (e) => {
    setSongName(e.target.value);
  };

  const handleRemoveSong = (movie) => {
    const action = removeSong(movie);
    dispatch(action);
  };
  return (
    <div className="row">
      <Songlist songs={songs} onSongRemove={handleRemoveSong} />

      <form>
        <div className="row">
          <div className="col-2">
            <input className="form-control" type="text" placeholder="Add Song" id="song-name" value={songName} onChange={handleOnChangeSong} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary" onClick={handleAddSong}>
              + Add Song
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SongPlayList;
