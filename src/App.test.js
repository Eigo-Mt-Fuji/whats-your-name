import React from "react";
import PropTypes from "prop-types";
import createMuiTheme from "material-ui/styles/createMuiTheme";

import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@babel/register";

import App from "./App";
Enzyme.configure({adapter: new Adapter()});

const muiTheme = createMuiTheme({palette: {type: "light"}});

test("renders without crashing", t => {
  let app = Enzyme.shallow((<App/>),     {
    context: {muiTheme},
    childContextTypes: {muiTheme: PropTypes.object}
  });
  t.is(app.find(".App").length, 1);
  t.pass();
});
