export default (value) => {
  if (typeof value == "object") {
    return `${value.firstName} ${value.lastName}`;
  } else {
    return value;
  }
};
