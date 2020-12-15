function CountryEntity(country, cases) {
  this.country = country;
  this.cases = cases;
}
export function createDivHtml(covid19api) {
  covid19api.countriesNameList().forEach((element) => {
    const countriesList = document.createElement('div');
    countriesList.innerHTML = `${element.country} ${element.cases}`;
    document.body.appendChild(countriesList);
  });
}
export default class Covid19Api {
  constructor() {
    this.makeRequest();
  }

  makeRequest() {
    const url = 'https://api.covid19api.com/summary';
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.response = response;
      });
  }

  countriesNameList() {
    const countryListAndCases = this.response.Countries.map(
      (c) => new CountryEntity(c.Country, c.TotalConfirmed),
    );
    return countryListAndCases.sort((a, b) => b.cases - a.cases);
  }
  // countriesDeathsList(){
  //     return this.response.Countries.
  // }
}
const covid19api = new Covid19Api();
setTimeout(() => {
  createDivHtml(covid19api);
}, 700);
