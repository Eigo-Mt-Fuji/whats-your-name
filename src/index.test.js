import React from "react";

import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "@babel/register";
import App from "./App.js";
Enzyme.configure({adapter: new Adapter()});


test("renders without crashing", t => {
  let obj = Enzyme.shallow(<App />);
  t.is(obj.hasClass("App"), true);
  t.pass();
});
