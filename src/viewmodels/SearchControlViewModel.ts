import { makeAutoObservable, runInAction } from 'mobx';
import { getCountryByName } from '../api/apiService';
import SearchControlModel from '../models/SearchControlModel';

export default class SearchControlViewModel {
    model: SearchControlModel;

    constructor(model: SearchControlModel) {
        makeAutoObservable(this);
        this.model = model;
    }

    onInputChange = (value: string) => {
        this.setInputValue(value);
        this.setResultsVisibility(true);
        this.filterCountriesByName(value);
    };

    setInputValue = (value: string) => {
        this.model = {
            ...this.model,
            inputValue: value,
        };
    };

    setResultsVisibility = (value: boolean) => {
        this.model = {
            ...this.model,
            isResultsVisible: value,
        };
    };

    onCountrySelect(countryName: string) {
        this.model = {
            ...this.model,
            inputValue: countryName,
            isResultsVisible: false,
        };
    }

    async filterCountriesByName(name: string) {
        const countries = await getCountryByName(name).then((result) =>
            result.slice(0, this.model.tipsCount),
        );

        runInAction(() => {
            this.model = {
                ...this.model,
                countries: countries,
            };
        });
    }
}
