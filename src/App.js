import React from "react";
import "./App.css";
import "./Custom.css";
import {I18n} from "react-i18next";

import MyPaper from "./components/MyPaper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {createMuiTheme} from "material-ui/styles";
//import ApiHelper from "./ApiHelper";

class App extends React.Component {

  render() {
    return (
    
      <div className="App">
      
        <I18n ns="translations">
          {
            (t) => (
              <MuiThemeProvider theme={createMuiTheme({palette: {type: "light"}})}>
                <div className="App-intro" style={{width: "100%"}}><h2>{t("title")}</h2></div>
                <MyPaper messageProperties={{
                  diagramText:t("welcome_sequence_diagram"),
                  diagramTextTitle:t("welcome_sequence_diagram_title")
                }}>
                  <div className="App-intro" style={{width: "100%"}}>{t("title")}</div>
                </MyPaper>
              </MuiThemeProvider>
            )
          }
        </I18n>
      </div>
    );
  }
  
  componentDidMount() {
    
    // let helper = new ApiHelper("../public/ip.json");
    // helper.get().then((json) => {
    //
    //   console.log("Response is", json);
    // }).catch(() => {
    //
    //   //console.log("Error args: ", e);
    //   //console.error("Error");
    // });
  }
}
export default App;
