import React from "react";
import "./App.css";
import "./Custom.css";
import AwesomeQrReader from "./components/AwesomeQrReader";
import {I18n} from "react-i18next";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {createMuiTheme} from "material-ui/styles";

class App extends React.Component {

  render() {
    return (
    
      <div className="App">
      
        <I18n ns="translations">
          {
            (t) => (
              <MuiThemeProvider theme={createMuiTheme({palette: {type: "light"}})}>
                <div className="App-intro" style={{width: "100%"}}><h2>{t("title")}</h2></div>
                <AwesomeQrReader />
              </MuiThemeProvider>
            )
          }
        </I18n>
      </div>
    );
  }
  componentDidMount() {
  }
}
export default App;
