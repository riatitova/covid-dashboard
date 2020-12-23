import createDOMElement from './createDOMElement';
import CountryLists from './CountriesList';
import '../css/list.scss';

export default class List {
  constructor(parentNode, covidDataService, countriesDataService) {
    this.statisticsNameElements = [];
    this.countriesList = {
      elementName: 'div', classNames: 'list', parent: parentNode,
    };
    this.covidDataService = covidDataService;
    this.countriesDataService = countriesDataService;
  }

  search(value) {
    const lowerCaseValue = value.toLowerCase();
    this.statisticsNameElements.forEach((element) => {
      const parent = element.parentNode.parentNode;
      const isContains = element.innerHTML.toLowerCase().includes(lowerCaseValue);
      parent.classList.toggle('countries-list__row_hidden', !isContains);
    });
  }

  renderList() {
    this.list = createDOMElement(this.countriesList);

    this.searchCountry = {
      elementName: 'input', classNames: 'list__search', parent: this.list,
    };

    const searchElement = createDOMElement(this.searchCountry);
    searchElement.placeholder = 'Search country';
    const onInput = event => this.search(event.target.value);
    searchElement.addEventListener('input', onInput.bind(this));

    const countriesList = new CountryLists(this.list);
    countriesList.countriesDataService = this.countriesDataService;
    countriesList.covidDataService = this.covidDataService;
    countriesList.renderCountriesList('TotalConfirmed');
    this.statisticsNameElements = countriesList.statisticsNameElements;
  }
}
