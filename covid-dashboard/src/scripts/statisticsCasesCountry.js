import createDOMElement from './createDOMElement';
import CountryLists from './countryCasesRow';
import CountryDataSwitch from './DataSwitch';
import '../css/countryCasesStatictics.scss';

export default class StatisticsCountries {
  constructor() {
    this.statisticsNameElements = [];
    this.countriesList = {
      elementName: 'div', classNames: 'list', parent: document.body,
    };
  }

  search(value) {
    const lowerCaseValue = value.toLowerCase();
    this.statisticsNameElements.forEach((element) => {
      const parent = element.parentNode.parentNode;
      const isContains = element.innerHTML.toLowerCase().includes(lowerCaseValue);
      parent.classList.toggle('countries-list__row_hidden', !isContains);
    });
  }

  renderCovidStatisticsLists() {
    this.list = createDOMElement(this.countriesList);

    this.searchCountry = {
      elementName: 'input', classNames: 'list__search', parent: this.list,
    };

    const searchElement = createDOMElement(this.searchCountry);
    searchElement.placeholder = 'Search country';
    const onInput = (event) => this.search(event.target.value);
    searchElement.addEventListener('input', onInput.bind(this));

    const listRow = new CountryLists();
    listRow.countriesDataService = this.countriesDataService;
    listRow.covidDataService = this.covidDataService;
    listRow.renderLists(this.list);
    this.statisticsNameElements = listRow.statisticsNameElements;

    const countryDataSwitch = new CountryDataSwitch(listRow.arrCountriesListElement);
    countryDataSwitch.renderDataSwitch(this.list);
  }
}
