/* eslint-disable import/no-unresolved */
import createDOMElement from './createDOMElement';
import CovidDataService from './CovidDataService';
import CountryCasesRow from './countryCasesRow';

export default class StatisnicsCasesCountries {
  constructor() {
    this.statisticsNameElements = [];
    this.countriesList = {
      elementName: 'div',
      classNames: 'countries-list',
      parent: document.body,
    };
  }

  renderStatisticsCasesCountries(countries) {
    this.list = createDOMElement(this.countriesList);

    this.serchCountry = {
      elementName: 'input', classNames: 'countries-list__serch', parent: this.list,
    };
    const searchElement = createDOMElement(this.serchCountry);
    searchElement.placeholder = 'Search country';
    const onInput = (event) => this.search(event.target.value);
    searchElement.addEventListener('input', onInput.bind(this));

    const listRow = new CountryCasesRow();
    listRow.renderRowList(countries, this.list);
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
    function mapper(entity) {
      return { country: entity.Country, cases: entity.TotalConfirmed };
    }
    this.statistics = new CovidDataService()
      .getSummary()
      .then(response => response.Countries.map(mapper))
      .then(countries => countries.sort((start, end) => end.cases - start.cases))
      .then(sortedCountries => this.renderStatisticsCasesCountries(sortedCountries));
  }
}
