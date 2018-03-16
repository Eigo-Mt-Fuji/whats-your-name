import React from 'react';

class MixinAlt extends React.Component {
    __intervals = [];
    setInterval(callback, interval) {

        console.log("MixinAlt.setInterval");
        let token = setInterval(callback, interval);
        this.__intervals.push(token);
        return token;
    };
    render() {

        console.log("MixinAlt.render");
        return null;
    };

    componentWillUnmount() {
        console.log("MixinAlt.componentWillUnmount");
        this.__intervals.map(clearInterval);
    }
};

export default class Timer extends MixinAlt {

    componentDidMount() {

        console.log("Timer.componentDidMount start");

        let token = this.setInterval(this.forceUpdate.bind(this), 1000);

        console.log("Timer.componentDidMount end token=" + token);
    };
    render() {

        console.log("Timer.render");
        let from = Number(new Date(2018, 0, 1));
        let to = Date.now();

        return (
            <div>Seconds Elapsed: {Math.round((to - from) / 1000)}</div>
        );
    }
};