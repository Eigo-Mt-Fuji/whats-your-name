import React from "react";
import Grid from "react-css-grid";

import PropTypes from "prop-types";

export default class MyAvatar extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }

  render() {
    // 横幅が664(320 * 2(number of div) + (2(number of div) - 1) * 24) を超えたら回りこみ
    return (
      <Grid width={160} gap={5}>
        <div>
          <img alt="avatar" src={this.props.src}/>
        </div>
        <div><span>{this.props.name}</span>(<span>{this.props.age}</span>)</div>
      </Grid>
    );
  }
}
