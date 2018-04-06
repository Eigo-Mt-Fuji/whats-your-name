import React from "react";

import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "@babel/register";
import ProfileSearch from "./ProfileSearch";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

Enzyme.configure({adapter: new Adapter()});
const theme = createMuiTheme({palette: {type: "light"}});

test("ProfileSearch without crash", t => {
  let wrapper = Enzyme.shallow(<MuiThemeProvider theme={theme}><ProfileSearch/></MuiThemeProvider>);
  t.true(wrapper.type().displayName == "WithStyles(ProfileSearch)");
  t.pass();
});