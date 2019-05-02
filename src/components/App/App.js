import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playListName: 'My Rock Playlist',
      playListTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  }

  // Add a song to the playListTracks state
  addTrack(track) {
    let tracks = this.state.playListTracks;
    tracks.push(track);
    this.setState({playListTracks: tracks});
  }

  // Remove a song from the playListTracks state
  removeTrack(track) {
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(savedTrack => savedTrack.id !== track.id); //leave the ones we want in the playlist
    this.setState({playListTracks: tracks});
  }

  updatePlayListName(name) {
    this.setState({playListName: name});
  }

  savePlayList() {
    let trackURIs = [];
  }

  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onSserach={this.search} />
            <Playlist playlistName={this.state.playListName} playlistTracks={this.state.playListTracks} onRemove={this.onRemove} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
