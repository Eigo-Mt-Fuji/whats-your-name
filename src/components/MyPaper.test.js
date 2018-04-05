import React from "react";
// import Paper from "material-ui/Paper";
import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "@babel/register";
import MyPaper from "./MyPaper";

Enzyme.configure({adapter: new Adapter()});

test("render MyPaper without crash", (t) => {
  let obj = Enzyme.render(
    <MyPaper>test</MyPaper>,
    {
      // context: {muiTheme},
      // childContextTypes: {muiTheme: PropTypes.object}
    }
  );
  t.true(obj.length == 1);
  t.true(obj[0].attribs.zdepth == "1");
  t.true(obj[0].attribs.rounded == "false");
  t.pass();
});
