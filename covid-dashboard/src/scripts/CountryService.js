export default class CountryService {
  constructor() {
    this.server = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
  }

  async getData() {
    this.res = await fetch(this.server);
    if (this.res.ok) {
      return this.res.json();
    }
    throw new Error(`Не удалось получить данные по адресу ${this.server}`);
  }

  getFlagByName(name) {
    const first = 0;
    return this.getData().then(
      response => {
        const country = response.filter(value => value.name === name)[first];
        return country !== undefined ? country.flag : '';
      },
    );
  }

  getPopulationByName(name) {
    const first = 0;
    return this.getData().then(
      response => response.filter(value => value.name === name)[first].population,
    );
  }
}
