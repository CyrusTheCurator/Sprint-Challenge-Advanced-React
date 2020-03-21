import React from "react";

const SearchResultsContainer = props => {
  return (
    <div>
      {" "}
      {props.searchResults.map(result => {
        return (
          <div key={result.id}>
            {result.id + 1}: {result.name}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultsContainer;
