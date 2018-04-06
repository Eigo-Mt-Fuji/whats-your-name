import React from "react";

import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "@babel/register";
import MyAvatar from "./MyAvatar";

Enzyme.configure({adapter: new Adapter()});

test("test", t => {
  let obj = Enzyme.shallow((<MyAvatar age={"12"} name={"hoge"} src={"./hoge.jpg"}></MyAvatar>));
  t.true(obj.type().name == "WithStyles");
  t.pass();
});