import React from "react";
import Paper from "material-ui/Paper";
import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "@babel/register";
import MyPaper from "./MyPaper";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightMuiTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import PropTypes from 'prop-types';

Enzyme.configure({adapter: new Adapter()});
//const muiTheme = getMuiTheme(lightMuiTheme);
test("render MyPaper without crash", (t) => {
  let obj = Enzyme.shallow(
    <MyPaper>test</MyPaper>,
    {
      // context: {muiTheme},
      // childContextTypes: {muiTheme: PropTypes.object}
    }
  );
  t.true(obj.type().name == "Paper");
  t.pass();
});
