import React from "react";
import PropTypes from "prop-types";
import createMuiTheme from "material-ui/styles/createMuiTheme";

import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@babel/register";

import App from "./App";
/*eslint import/no-named-as-default-member: "off"*/
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import {reactI18nextModule} from "react-i18next";
import enResources from "../public/locales/en/translations";

Enzyme.configure({adapter: new Adapter()});

i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",
    lng:"en",
    ns: ["translations"],
    defaultNS: "translations",
    backend: {
      crossDomain: false,
      ajax: function(url, options, callback) {
        callback(JSON.stringify(enResources), {status: "200"});
      }
    },
    debug: false,
    
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    
    react: {
      wait: true
    }
  });

const muiTheme = createMuiTheme({palette: {type: "light"}});

test("renders without crashing", t => {
  let wrapper = Enzyme.shallow((<App/>), {
    context: {muiTheme},
    childContextTypes: {muiTheme: PropTypes.object}
  });
  t.true(wrapper.find(".App").length == 1);
  t.pass();
});
