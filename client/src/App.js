import React, { useState } from "react";
import SearchResultsContainer from "./components/SearchResultsContainer";
import ModeToggleSlider from "./components/ModeToggleSlider";
import "./App.css";
class App extends React.Component {
  safeModeStatus = window.localStorage.getItem("safeMode") ? true : false;
  // Constructor with state ADD THIS BACK TO SAFEMODE PROP this.safeModeStatus
  constructor() {
    super();
    this.state = {
      safeMode: this.safeModeStatus,
      searchResults: []
    };
  }

  handleSafeModeChange = e => {
    this.setState(!e.target.value);
  };

  //
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(searchResults => this.setState({ searchResults: searchResults }))
      .catch(err => {
        alert("some kind of error occurred");
      });
  }

  render() {
    return (
      <div className="App">
        <ModeToggleSlider
          handleSafeModeChange={this.handleSafeModeChange}
          safeMode={this.safeMode}
        />

        <div>test</div>
        <h1>Your Search Results</h1>

        <SearchResultsContainer searchResults={this.state.searchResults} />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
