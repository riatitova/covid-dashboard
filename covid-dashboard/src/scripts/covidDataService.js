export default class CovidDataService {
  constructor() {
    this.server = 'https://api.covid19api.com/';
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async getData(url) {
    this.res = await fetch(url, this.requestOptions);
    if (this.res.ok) {
      return this.res.json();
    }
    throw new Error(`Не удалось получить данные по адресу ${url}`);
  }

  getSummary() {
    return this.getData(`${this.server}summary`);
  }

  getSummaryGlobal() {
    return this.getSummary().then(response => {
      const global = response.Global;
      return global;
    });
  }

  getLastDate(countryName) {
    return this.getSummary().then(response => {
      const first = 0;
      const date = response.Countries.filter(value => value.Country === countryName)[first]
        .Date;
      return date;
    });
  }

  getCountryDataByName(countryName) {
    return this.getSummary().then(response => {
      const first = 0;
      const date = response.Countries.filter(value => value.Country === countryName)[first];
      return date;
    });
  }
}
