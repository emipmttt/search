import React, { useState } from "react";
import { connect } from "react-redux";
import { setSearchText } from "@/store/actions";

const Home = ({ searchText, setSearchText }) => {
  const inputHandle = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        onInput={inputHandle}
        value={searchText}
        type="text"
        placeholder="Search ..."
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
