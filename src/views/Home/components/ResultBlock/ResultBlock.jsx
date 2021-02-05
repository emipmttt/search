import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CollectionData, enableKeys } from "./CollectionData";

const ResultBlock = ({ collection, searchText }) => {
  const [data, setData] = useState([]);

  const headers = collection.keys.filter((key) => enableKeys.includes(key));

  useEffect(() => {
    setData(() => {
      const dataFinded = collection.data.filter((dataItem) => {
        let find = false;
        headers.forEach((key) => {
          if (
            typeof dataItem[key] != "boolean" &&
            dataItem[key].toString().includes(searchText)
          )
            find = true;
        });

        if (find) {
          return true;
        }
        return false;
      });
      return dataFinded.splice(0, 40);
    });
  }, [searchText]);

  return (
    <>
      <div className="card">
        <h2>{collection.title}</h2>

        <table className="mt-5">
          <thead>
            <tr>
              {headers.map((key, i) => (
                <th key={i}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((collectionData, i) => (
              <tr key={i}>
                {headers.map((key, i) => (
                  <CollectionData
                    collectionData={collectionData}
                    key={i}
                    keyName={key}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};
export default connect(mapStateToProps, null)(ResultBlock);
