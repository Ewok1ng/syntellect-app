import React from 'react';
import ButtonControlModel from '../models/ButtonControlModel';
import ButtonModel from '../models/ButtonModel';
import ButtonControlViewModel from '../viewmodels/ButtonControlViewModel';
import SearchControlViewModel from '../viewmodels/SearchControlViewModel';

import ButtonControl from '../components/Controls/ButtonControl';
import SearchControl from '../components/Controls/SearchControl';
import SearchControlModel from '../models/SearchControlModel';

export default function Main() {
    const controlOne = new ButtonControlViewModel(new ButtonControlModel());
    controlOne.model.rightButtons = [
        new ButtonModel('Clear', controlOne.clearInput),
        new ButtonModel('Hello world', controlOne.helloWorld),
    ];

    const controlTwo = new ButtonControlViewModel(new ButtonControlModel());
    controlTwo.model.leftButtons = [new ButtonModel('Alert isNumber', controlTwo.alertNumber)];
    controlTwo.model.rightButtons = [new ButtonModel('Alert text', controlTwo.alertInputValue)];

    const controlThree = new SearchControlViewModel(new SearchControlModel(3));
    const controlFour = new SearchControlViewModel(new SearchControlModel(10));

    return (
        <div className="main">
            <ButtonControl viewModel={controlOne} />
            <ButtonControl viewModel={controlTwo} />
            <SearchControl viewModel={controlThree} />
            <SearchControl viewModel={controlFour} />
        </div>
    );
}
