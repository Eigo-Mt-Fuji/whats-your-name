import React from 'react';

export default class AutoCompleteCities extends React.Component {

    static defaultProps = {

        data: [
            "サンフランシスコ",
            "セントルイス",
            "アムステルダム",
            "ロサンゼルス"
        ]
    };

    handleSelect(city) {

        alert("選択された都市")
    };
    render() {

        return (
            <div id="cities" ref="autocompleteTarget"/>
        )
    };
}