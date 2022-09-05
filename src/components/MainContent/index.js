import React from "react";
import Countries from "./Countries";
import SearchAndFilter from "./SearchAndFilter";

function MainContent(props) {
  return (
    <div>
      <SearchAndFilter />
      <Countries />
    </div>
  );
}

export default MainContent;
