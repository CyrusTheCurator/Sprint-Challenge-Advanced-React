import React, { useEffect } from "react";
import SearchResultsContainer from "./components/SearchResultsContainer";
import ModeToggleSlider from "./components/ModeToggleSlider";
import "./App.css";
class App extends React.Component {
  // Constructor with state ADD THIS BACK TO SAFEMODE PROP this.safeModeStatus
  constructor() {
    super();
    this.state = {
      safeMode: this.safeModeStatus,
      searchResults: []
    };
  }

  handleSafeModeChange = e => {
    this.setState({ safeMode: true });
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

        <div className="safeModeText">
          You are now safe. Stay indoors, Cough into your elbow, Binge React
          podcasts
        </div>
        <h1>Your Search Results</h1>

        <SearchResultsContainer searchResults={this.state.searchResults} />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
