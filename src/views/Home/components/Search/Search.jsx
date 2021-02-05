import React from "react";
import { connect } from "react-redux";
import { setSearchText } from "@/store/actions";

const Search = ({ searchText, setSearchText }) => {
  const inputHandle = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        onInput={inputHandle}
        value={searchText}
        type="text"
        placeholder="Search"
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};
const mapDispatchToProps = {
  setSearchText,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
