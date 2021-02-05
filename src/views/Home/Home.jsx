import React from "react";
import Search from "./components/Search/Search";
import ResultBlock from "./components/ResultBlock/ResultBlock";

import collections from "@/services/collections.js";

export default () => {
  return (
    <>
      <Search />
      {collections.map((collection, i) => (
        <ResultBlock collection={collection} key={i} />
      ))}
    </>
  );
};
