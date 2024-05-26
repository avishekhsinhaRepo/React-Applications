import { useDispatch } from "react-redux";
import SongPlayList from "./components/songs/SongPlayList";
import MoviePlayList from "./components/movies/MoviePlayList";
import { reset } from "./store";
function App() {
  const dispatch = useDispatch();
  const resetBothList = () => {
    // Add your code here
    const action= reset();
    dispatch(action);
  }

  return (
    <div className="container">
      <div className="row ">
        <h1 className="position-center">Redux Store</h1>
      </div>
      <div className="row">
        
        <button type="button" className="btn btn-primary position-right" onClick={resetBothList}>
          Reset Both List
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <MoviePlayList />
        </div>
      </div>
      <hr />
      <div className="card">
        <div className="card-body">
          <SongPlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
