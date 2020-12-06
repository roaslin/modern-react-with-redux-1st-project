import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSubmitSearch = async (term) => {
    try {
      const results = await youtube.get("/search", { params: { q: term } });
      this.setState({ videos: results.data.items, selectedVideo: results.data.items[0] });
    } catch (err) {
      console.log(err);
    }
  };

  onClickVideoItem = (video) => {
    this.setState({ selectedVideo: video });
    console.log(this.state.selectedVideo);
  };

  async componentDidMount() {
    this.onSubmitSearch('Buildings');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmitSearch} />
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onClickVideoItem={this.onClickVideoItem}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
