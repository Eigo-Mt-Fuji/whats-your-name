import React from 'react';
import Grid from 'react-css-grid';

export default class MyAvatar extends React.Component {

    props={
        src:"",
        name:"",
        age:""
    };
    render() {
        // 横幅が664(320 * 2(number of div) + (2(number of div) - 1) * 24) を超えたら回りこみ
        return (

            <Grid width={160} gap={5}>
                <div>
                    <img src={this.props.src}/>
                </div>
                <div><span>{ this.props.name }</span>(<span>{ this.props.age }</span>)</div>
            </Grid>
        )
    }
}

