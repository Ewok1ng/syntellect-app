import { CountryInfo } from '../api/apiService';

export default class SearchControlModel {
    inputValue: string;
    tipsCount: number;
    isResultsVisible: boolean;
    countries: CountryInfo[];

    constructor(tipsCount: number) {
        this.inputValue = '';
        this.tipsCount = tipsCount;
        this.isResultsVisible = false;
        this.countries = [];
    }
}
