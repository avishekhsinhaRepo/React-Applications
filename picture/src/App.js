import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImage from './api';
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);
  const handleClick = (term)=>{
      searchImage(term).then(data=>{
         setImageList(data);
      })
    }
  
  return (
    <div className="App">
      <SearchBar onSearch={handleClick}/>
      <ImageList imageUrls={imageList}/>
    </div>
  );
}

export default App;
