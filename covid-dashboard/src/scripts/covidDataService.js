export default class CovidDataService {
  set covidDataResponse(data) {
    this.covidData = data;
  }

  get summary() {
    return this.covidData;
  }

  getSummaryGlobal() {
    return this.covidData.Global;
  }

  getLastDate() {
    return this.covidData.Date;
  }

  getCountriesNames() {
    const countriesNames = this.covidData.Countries.map(value => value.Country);
    return countriesNames;
  }

  getCountryDataByName(countryName) {
    const first = 0;
    const countryData = this.covidData.Countries.filter(value => value.Country === countryName)[
      first
    ];
    return countryData;
  }
}
