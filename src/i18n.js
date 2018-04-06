/*eslint import/no-named-as-default-member: "off"*/
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {reactI18nextModule} from "react-i18next";
import enResources from "../public/locales/en/translations";
import jaResources from "../public/locales/ja/translations";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: "en",
    
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    backend: {
      crossDomain: false,
      ajax: function(url, options, callback) {
        
        if(url == "/locales/ja/translations.json") {
          
          callback(JSON.stringify(jaResources), {status: "200"});
        }else {
          
          callback(JSON.stringify(enResources), {status: "200"});
        }
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

export default i18n;