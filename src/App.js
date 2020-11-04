import React from "react";

import Main from "./Main";
import { connect } from "react-redux";

const Application = (state) => {
  return <Main />;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Application);
