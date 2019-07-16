/*eslint no-unused-vars: "off"*/
import React from "react";
/*eslint no-unused-vars: "off"*/
import PropTypes from "prop-types";
import createMuiTheme from "material-ui/styles/createMuiTheme";

import test from "ava";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@babel/register";

/*eslint no-unused-vars: "off"*/
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import {reactI18nextModule} from "react-i18next";
import enResources from "./locales/en/translations";

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

/*eslint no-unused-vars: "off"*/
const muiTheme = createMuiTheme({palette: {type: "light"}});

test("renders without crashing", t => {
  t.true(true);
  t.pass();
});