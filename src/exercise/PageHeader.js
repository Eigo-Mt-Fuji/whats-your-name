import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

export default class PageHeader extends React.Component {

    handleClick() {

        alert('onClick triggered on the title component');
    };

    render() {

        let styles = {
            title: {
                cursor: 'pointer',
            },
        }
        return (
          <AppBar
              title={<span style={styles.title}>Hello</span>}
              onTitleClick={this.handleClick}
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              iconElementRight={<FlatButton label={this.props.label}></FlatButton>}
          >
          </AppBar>

        );
    }
};
