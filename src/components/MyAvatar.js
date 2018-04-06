import React from "react";

import PropTypes from "prop-types";
import Grid from "material-ui/Grid";
import Avatar from "material-ui/Avatar";

export default class MyAvatar extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
  }

  render() {
  
    return (
      <Grid direction={"column"} container={true} justify={"center"} alignItems={"center"} spacing={8}>
        <Grid item={true} xs={10} sm={10} alignItem={"flex-start"}>
          <Avatar style={{width: 90, height: 100}} alt="avatar" src={this.props.src} />
        </Grid>
        <Grid item={true} xs={10} sm={10} alignItem={"flex-start"}>
          <div style={{width: "max-content",margin: "0 auto", textAlign: "center"}}>
            {this.props.name}({this.props.age})
          </div>
        </Grid>
      </Grid>
    );
  }
}
