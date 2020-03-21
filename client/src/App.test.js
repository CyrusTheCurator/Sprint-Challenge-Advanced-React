import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ModeToggleSlider from "./components/ModeToggleSlider";
import SearchResultsContainer from "./components/SearchResultsContainer";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
});

it("Checks for dark mode toggler", () => {
  const div = document.createElement("div");
  const container = render(<App />, div);
  container.getByTestId("ModeToggleSlider");
});

it("confirms successful mounting of mode toggle component", async () => {
  await render(<ModeToggleSlider />);
});

it("confirms successful mounting of search results container", async () => {
  await render(<SearchResultsContainer searchResults={[]} />);
});
