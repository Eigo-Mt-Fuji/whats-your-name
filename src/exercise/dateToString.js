import React from 'react';

function dateToString(d) {

    return [

        d.getFullYear(),
        d.getMonth() + 1,
        d.getDate(),
    ].join("-");
};

export default (<h2>{dateToString(new Date())}</h2>);
