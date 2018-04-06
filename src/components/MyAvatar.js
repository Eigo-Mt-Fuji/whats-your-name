import React from "react";

import PropTypes from "prop-types";
import Grid from "material-ui/Grid";

export default class MyAvatar extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
  }

  render() {
  
    return (
      <Grid direction={"column"} container={true} justify={"flex-start"} alignItems={"flex-start"} spacing={8}>
        <Grid item={true} xs={10} sm={10}>
          <img alt="avatar" src={this.props.src}/>
        </Grid>
        <Grid item={true} xs={2} sm={2}>
          <span>{this.props.name}</span>(<span>{this.props.age}</span>)
        </Grid>
      </Grid>
    );
  }
}
