import React from "react";
import "./NoResults.css";

function NoResults() {
  return (
    <div className="no_results">
      <p>Sorry! we didn't found anything regarding your search</p>
      <img
        src="https://i.pinimg.com/originals/e2/01/fe/e201fecab309152d4fc871c3cd97fb6d.gif"
        alt="error"
      />
    </div>
  );
}

export default NoResults;
