export default class CountryService {
  set countriesDataResponse(data) {
    this.countriesData = data;
  }

  get countriesDataResponse() {
    return this.countriesData;
  }

  getFlagByName(name) {
    const first = 0;
    const country = this.countriesData.filter(value => value.name === name)[first];
    return country !== undefined ? country.flag : '';
  }

  getPopulationByName(name) {
    const first = 0;
    const country = this.countriesData.filter(value => value.name === name)[first];
    return country !== undefined ? country.population : '';
  }
}
