import React from 'react';

let IntervalMixin = {

    setInterval: function(callback, interval) {

        let token = setInterval(callback, interval);
        this.__intervals.push(token);
        return token;
    },
    componentDidMount: function() {

        this.__intervals.push(token);
    },
    componentWillUnmount: function() {
        this.__intervals.map(clearInterval);
    }
};
export default class Timer extends React.Component {
    mixins = [ IntervalMixin ];
    componentDidMount() {

        this.setInterval(this.forceUpdate.bind(this), 1000);
    };

    render() {

        let from = Number(new Date(2018, 0, 1));
        let to = Date.now();

        return (
            <div>Seconds Elapsed: {Math.round((to - from) / 1000)}</div>
        );
    };
};