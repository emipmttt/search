import React from "react";
import { connect } from "react-redux";

import Search from "./components/Search/Search";
import ResultBlock from "./components/ResultBlock/ResultBlock";
import Filter from "./components/Filter/Filter";

import collections from "@/services/collections.js";

const Home = ({ selectedCollection }) => {
  return (
    <>
      <Search />
      <Filter collections={collections} />
      {collections.map((collection, i) => (
        <div key={i}>
          {selectedCollection != "" &&
            collection.title == selectedCollection && (
              <ResultBlock collection={collection} />
            )}
          {selectedCollection == "" && <ResultBlock collection={collection} />}
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCollection: state.selectedCollection,
  };
};

export default connect(mapStateToProps, null)(Home);
