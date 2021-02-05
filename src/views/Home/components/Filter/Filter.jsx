import React from "react";
import { connect } from "react-redux";
import { setSelectedCollection } from "@/store/actions";

const Filter = ({ collections, selectedCollection, setSelectedCollection }) => {
  const buttonClass = (title) => {
    return title != selectedCollection ? "no-fill" : "";
  };

  const clickHandler = (title) => {
    setSelectedCollection(title);
  };

  return (
    <div>
      {collections.map((collection) => (
        <button
          onClick={() => {
            clickHandler(collection.title);
          }}
          key={collection.title}
          className={`mr-1 ${buttonClass(collection.title)}`}
        >
          {collection.title}
        </button>
      ))}
      <button
        onClick={() => {
          clickHandler("");
        }}
        className={`mr-1`}
      >
        All
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    selectedCollection: state.selectedCollection,
  };
};
const mapDispatchToProps = {
  setSelectedCollection,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
