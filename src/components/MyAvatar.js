import React from 'react';
import Grid from 'react-css-grid';

export default class MyAvatar extends React.Component {

    props={
        src:"",
        name:"",
        age:""
    };
    render() {

        return (
            <Grid width={320} gap={24}>
                <div>
                    <img src={"./images/uxceo-128.jpg"}/>
                </div>
                <div><span>{ this.props.name }</span>(<span>{ this.props.age }</span>)</div>
            </Grid>
        )
    }
}

