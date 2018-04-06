import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import {withStyles} from "material-ui/styles";

const styles = () => ({
  root: {
    marginRight:"20px",
    width: "100%",
    minWidth: "200px"
    
  }
});

/**
 * Class ProfileSearch created by e_fujikawa on 2018/04/06
 * @extends React.Component
 */
class ProfileSearch extends React.Component {
  
  static propTypes = {
    id: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
  };
  
  /**
   * Create ProfileSearch
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    const {id, classes} = this.props;

    return (
      
      <TextField
        type="search"
        margin="normal"
        fullWidth={true}
        label="Search profile"
        id={id}
        className={classes.root}
      />
    );
  }
}

export default withStyles(styles)(ProfileSearch);
