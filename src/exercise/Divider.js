import React from 'react';
import createReactClass from 'create-react-class';

var Divider = createReactClass({

    render: function(){

        return (
            <div className="divider">
                ラベルの文字列
                <hr />
            </div>
        );
    }
});

export default Divider;
