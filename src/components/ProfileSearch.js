import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import {withStyles} from 'material-ui/styles';

const styles = (theme) => ({
  root: {
    width: "inherit"
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
        label="Search field"
        id={id}
        className={classes.root}
      />
    );
  }
};

export default withStyles(styles)(ProfileSearch);
