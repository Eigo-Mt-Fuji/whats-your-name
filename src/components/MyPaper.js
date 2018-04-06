import React from "react";
import Paper from "material-ui/Paper";
import { withStyles } from 'material-ui/styles';
import SequenceDiagramWrapper from "./SequenceDiagramWrapper";
import MyAvatar from "./MyAvatar";
import Grid from "material-ui/Grid";
import PropTypes from "prop-types";
import ProfileSearch from "./ProfileSearch";

const styles = (theme) => ({
  root: {
    width: "inherit"
  }
});

class MyPaper extends React.Component {
  
  static propTypes = {
    
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} zdepth={1} rounded={"false"}>
        <Grid container={true} direction={"column"} spacing={8}>
          <Grid sm={4} item={true} container={true} direction={"row"} spacing={8}>
            <Grid item={true} xs={12} sm={4}>
              <MyAvatar src={"./images/avatar.jpg"} name={"藤川 英悟"} age={"0x1d"}/>
            </Grid>
            <Grid item={true} xs={12} sm={8}>
              <ProfileSearch id={"search"}></ProfileSearch>
            </Grid>
          </Grid>
          
          <Grid item={true} xs={4} sm={4} container={true} direction={"row"} spacing={8}>
            <Grid item={true} xs={12} sm={12}>
              <SequenceDiagramWrapper theme={"hand"} diagramText={
                "You->This Site: Choose Introduction\n" +
                "This Site->You: My summary profile \n" +
                "Note right of You: More detail , About me\n" +
                "You->This Site: Choose category \n" +
                "This Site->You: Show topics of the category\n" +
                "Note right of You: be interested in, About me\n" +
                "You->This Site: Request meeting\n" +
                "This Site->You: You're welcome!!\n"
              }/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(MyPaper);