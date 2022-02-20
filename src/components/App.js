import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSearchSubmit("nba");
  }

  onSelectedVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  onSearchSubmit = async (input) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: input,
        },
      });

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    } catch (e) {
      console.log(e.response);
    }
  };
  render() {
    return (
      <div className='ui container'>
        <h3 className='ui block header red'>
          <i className='youtube icon'></i>YouTube
        </h3>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onSelectedVideo={this.onSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
