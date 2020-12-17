import createDOMElement from './createDOMElement';

function CountryEntity(country, cases) {
  this.country = country;
  this.cases = cases;
}
export function createDivHtml(covid19api) {
  let elementData = {
    elementName: 'div', classNames: 'statistics-list', parent: document.body,
  };
  const list = createDOMElement(elementData);
  elementData = {
    elementName: 'div', classNames: 'statistics-serch', children: 'ето будет поиск',parent: list,
  };
  createDOMElement(elementData);

  covid19api.countriesNameList().forEach((element) => {
    elementData = {
      elementName: 'div', classNames: 'statistics-row', parent: list,
    };
    const statisticsRow = createDOMElement(elementData);
    elementData = {
      elementName: 'div', classNames: 'statistics__name', children: `${element.country}`, parent: statisticsRow,
    };
    createDOMElement(elementData);
    elementData = {
      elementName: 'div', classNames: 'statistics__cases', children: `${element.cases}`, parent: statisticsRow,
    };
    createDOMElement(elementData);
    // const countriesList = document.createElement('div');
    // countriesList.innerHTML = `${element.country} ${element.cases}`;
    // document.body.appendChild(countriesList);
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
}
// const covid19api = new Covid19Api();
// setTimeout(() => {
//   createDivHtml(covid19api);
// }, 700);
