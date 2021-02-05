import React from "react";
import { isActive, tags, description, name } from "./DataTypes/index";

export const enableKeys = [
  "isActive",
  "balance",
  "sourceA",
  "sourceB",
  "tags",
  "company",
  "description",
  "name",
  "dashboardName",
  "address",
  "age",
  "email",
];

export const CollectionData = ({ collectionData, keyName }) => {
  const determinateTypeKey = () => {
    switch (keyName) {
      case "isActive":
        return isActive(collectionData[keyName]);
      case "tags":
        return tags(collectionData[keyName]);
      case "description":
        return description(collectionData[keyName]);
      case "name":
        return name(collectionData[keyName]);

      default:
        return <span>{collectionData[keyName]}</span>;
    }
  };

  return <td>{determinateTypeKey()}</td>;
};
