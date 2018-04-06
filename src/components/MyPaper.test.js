import React from "react";

import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {createMuiTheme} from "material-ui/styles";

import "@babel/register";
import MyPaper from "./MyPaper";

const theme = createMuiTheme({
  palette: {type: "light"}
});
Enzyme.configure({adapter: new Adapter()});

test("render MyPaper without crash", (t) => {
  let wrapper = Enzyme.shallow(
    <MuiThemeProvider theme={theme}><MyPaper>test</MyPaper></MuiThemeProvider>
  );
  t.true(wrapper.type().displayName == "WithStyles(MyPaper)");
  console.log(wrapper.html());
  t.pass();
});
