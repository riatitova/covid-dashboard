import createDOMElement from './createDOMElement';
import '../css/list.scss';

export default class CountryLists {
  constructor(parentNode) {
    this.statisticsNameElements = [];
    this.list = parentNode;
  }

  renderCountriesList(data, className) {
    this.statisticsNameElements = [];
    const childrenNodes = this.list.children;
    for (let i = 0; i < childrenNodes.length; i += 1) {
      if (childrenNodes[i].classList.contains('countries-list')) {
        childrenNodes[i].remove();
      }
    }
    const countries = this.covidDataService.summary.Countries;
    countries.sort((start, end) => end[data] - start[data]);
    this.createCountriesList(data, countries, className);
  }

  createCountriesList(data, countries, className) {
    this.countriesList = {
      elementName: 'div', classNames: 'countries-list', parent: this.list,
    };
    this.countriesListEl = createDOMElement(this.countriesList);

    countries.forEach((element) => {
      this.createRow();
      this.createRowWrapper();
      this.createCasesWrapper();
      this.createData(className, element[data]);
      this.createFlag(element);
      this.createNameCountry(element);
    });
  }

  createRow() {
    this.rowList = {
      elementName: 'div', classNames: 'countries-list__row', parent: this.countriesListEl,
    };
    this.rowElement = createDOMElement(this.rowList);
  }

  createCasesWrapper() {
    this.wrapperCases = {
      elementName: 'div', classNames: 'countries-list__wrapper-cases', parent: this.rowElement,
    };
    this.wrapperCasesElement = createDOMElement(this.wrapperCases);
  }

  createData(className, data) {
    this.Data = {
      elementName: 'div', classNames: className, children: data.toString(), parent: this.wrapperCasesElement,
    };
    this.DataElement = createDOMElement(this.Data);
  }

  createRowWrapper() {
    this.wrapperCountry = {
      elementName: 'div', classNames: 'countries-list__wrapper-country', parent: this.rowElement,
    };
    this.wrapperElement = createDOMElement(this.wrapperCountry);
  }

  createFlag(element) {
    this.countryFlag = {
      elementName: 'IMG', classNames: 'countries-list__flag', parent: this.wrapperElement,
    };
    const img = createDOMElement(this.countryFlag);
    this.addFlag(element.Country, img);
  }

  createNameCountry(element) {
    this.countryName = {
      elementName: 'div', classNames: 'countries-list__name', children: element.Country, parent: this.wrapperElement,
    };
    this.statisticsNameElements.push(createDOMElement(this.countryName));
  }

  addFlag(countryName, img) {
    const imgNode = img;
    this.flag = this.countriesDataService.getFlagByName(countryName);
    imgNode.src = this.flag;
  }
}
