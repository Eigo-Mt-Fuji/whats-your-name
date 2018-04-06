import React from "react";
import Paper from "material-ui/Paper";
import {withStyles} from "material-ui/styles";
import SequenceDiagramWrapper from "./SequenceDiagramWrapper";
import MyAvatar from "./MyAvatar";
import Grid from "material-ui/Grid";
import PropTypes from "prop-types";
import ProfileSearch from "./ProfileSearch";

const styles = () => ({
  root: {
    width: "inherit"
  }
});

class MyPaper extends React.Component {
  
  static propTypes = {
    
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired,
    diagramText: PropTypes.string.isRequired
  };
  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root} zdepth={1} rounded={"false"}>
        <Grid container={true} direction={"column"} spacing={8}>
          <Grid sm={4} item={true} container={true} direction={"row"} spacing={8}>
            <Grid item={true} xs={12} sm={4}>
              <MyAvatar src={"./images/avatar.jpg"} name={"藤川 英悟"} age={"5"}/>
            </Grid>
            <Grid item={true} xs={12} sm={8}>
              <ProfileSearch id={"search"}></ProfileSearch>
            </Grid>
          </Grid>
          
          <Grid item={true} xs={4} sm={4} container={true} direction={"row"} spacing={8}>
            <Grid item={true} xs={12} sm={12}>
              <SequenceDiagramWrapper theme={"hand"} diagramText={this.props.diagramText}/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(MyPaper);