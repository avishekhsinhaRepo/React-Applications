import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "./api/unsplash";
import ImageList from "./ImageList";
class App extends React.Component {
state = { images: [], isLoading: false };

  onSearchEvent = async (term) => {
    this.setState({ isLoading: true });
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      }
     
    });
    this.setState({ images: response.data.results,isLoading: false });
   };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearch={this.onSearchEvent} />
        <ImageList imageList={this.state.images} isLoading={this.state.isLoading} />
      </div>
    )
  }
}
export default App;
