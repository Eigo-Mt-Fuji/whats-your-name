import React from "react";
import "./App.css";
import "./Custom.css";
import MyPaper from "./components/MyPaper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {createMuiTheme} from "material-ui/styles";
import ApiHelper from "./ApiHelper";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <MuiThemeProvider theme={createMuiTheme({palette: {type: "light"}})}>
          <MyPaper>
            <div className="App-intro" style={{width: "100%"}}>{"You're welcome, here."}</div>
          </MyPaper>
        </MuiThemeProvider>
      </div>
    );
  };
  
  componentDidMount() {
    
    let helper = new ApiHelper("../public/ip.json");
    helper.get().then((json) => {
      
      console.log("Response is", json);
    }).catch((e) => {
      
      //console.log("Error args: ", e);
      //console.error("Error");
    });
  }
}
export default App;
