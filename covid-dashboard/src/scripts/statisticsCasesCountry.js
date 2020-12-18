/* eslint-disable import/no-unresolved */
import createDOMElement from './createDOMElement';
import CovidDataService from './CovidDataService';
import CountryCasesRow from './countryCasesRow';

export default class StatisnicsCasesCountry {
  constructor() {
    this.statisticsNameElements = [];
    this.statisticsList = {
      elementName: 'div',
      classNames: 'countries-list',
      parent: document.body,
    };
  }

  renderStatisnicsCasesCountries(counties) {
    this.list = createDOMElement(this.statisticsList);
    this.serchCountry = {
      elementName: 'input', classNames: 'countries-list__serch', parent: this.list,
    };
    const searchElement = createDOMElement(this.serchCountry);
    searchElement.placeholder = 'Search country';
    const onInput = (e) => this.search(e.target.value);
    searchElement.addEventListener('input', onInput.bind(this));
    const listRow = new CountryCasesRow();
    listRow.renderRowList(counties, this.list);
    this.statisticsNameElements = listRow.statisticsNameElements;
  }

  search(value) {
    const lowerCaseValue = value.toLowerCase();
    this.statisticsNameElements.forEach((element) => {
      const parent = element.parentNode.parentNode;
      const isContains = element.innerHTML.toLowerCase().includes(lowerCaseValue);
      parent.classList.toggle('countries-list__row_hidden', !isContains);
    });
  }

  getStatisticsCountryCases() {
    function fun(c) {
      return { country: c.Country, cases: c.TotalConfirmed };
    }
    this.statistics = new CovidDataService()
      .getSummary()
      .then(response => response.Countries.map(fun))
      .then(countries => countries.sort((start, end) => end.cases - start.cases))
      .then(sortedCountries => this.renderStatisnicsCasesCountries(sortedCountries));
  }
}
