/* eslint-disable import/no-unresolved */
import createDOMElement from './createDOMElement';
import CovidDataService from './CovidDataService';

export default class StatisnicsCasesCountry {
  constructor() {
    this.statisticsNameElements = [];
    this.statisticsList = {
      elementName: 'div',
      classNames: 'statistics-list',
      parent: document.body,
    };
  }

  renderStatisnicsCasesCountry(counties) {
    const that = this;
    this.list = createDOMElement(this.statisticsList);
    this.serchCountry = {
      elementName: 'input', classNames: 'statistics-serch', parent: this.list,
    };
    this.searchElement = createDOMElement(this.serchCountry);
    this.searchElement.addEventListener('input', (e) => that.search(e.target.value));

    counties.forEach((element) => {
      this.statisticsRow = {
        elementName: 'div', classNames: 'statistics-row', parent: this.list,
      };
      this.statisticsRow = createDOMElement(this.statisticsRow);
      this.statisticsName = {
        elementName: 'div', classNames: 'statistics__name', children: `${element.country}`, parent: this.statisticsRow,
      };
      this.statisticsNameElements.push(createDOMElement(this.statisticsName));
      this.statisticsCases = {
        elementName: 'div', classNames: 'statistics__cases', children: `${element.cases}`, parent: this.statisticsRow,
      };
      createDOMElement(this.statisticsCases);
    });
  }

  search(value) {
    const lowerCaseValue = value.toLowerCase();
    this.statisticsNameElements.forEach((element) => {
      const parent = element.parentNode;
      const isContains = element.innerHTML.toLowerCase().includes(lowerCaseValue);
      parent.style.display = isContains ? 'grid' : 'none';
    });
  }

  getStatisticsCountryCases() {
    function fun(c) {
      return { country: c.Country, cases: c.TotalConfirmed };
    }
    this.statistics = new CovidDataService()
      .getSummary()
      .then(response => response.Countries.map(fun))
      .then(countries => countries.sort((a, b) => b.cases - a.cases))
      .then(sortedCountries => this.renderStatisnicsCasesCountry(sortedCountries));
  }
}
