import React from "react";
import Spinner from "react-native-loading-spinner-overlay";
const Loader = ({ visible }) => {
  return <Spinner visible={visible} textContent={"Loading..."} />;
};
export default Loader;
