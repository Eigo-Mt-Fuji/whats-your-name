import React from 'react';
import 'whatwg-fetch'
import ApiHelper from "./ApiHelper";

export default class Fetch extends React.Component {

    state = {
        ip: "127.0.0.1"
    };

    render() {

       return ( <div ip={this.state.ip}>{this.props.children}</div> );
    };
    async componentDidMount() {

        let helper = new ApiHelper("http://localhost:3000/fetch-mock");
        let response = await helper.get(1);

        console.log('response=', response);
        let obj = JSON.parse(response.json);
        if(this.state.ip != json.ip ) {

            let state = {};
            state.ip = obj.ip;
            this.setState(state);
        }
    }
};