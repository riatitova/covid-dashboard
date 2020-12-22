import createDOMElement from './createDOMElement';
import '../css/countryCasesStatictics.scss';
import '../css/statisticsList.scss';

export default class CountryLists {
  constructor() {
    this.globalCases = {
      className: 'countries-list__cases', data: 'TotalConfirmed', parentClassName: 'global__cases',
    };
    this.globalDeaths = {
      className: 'countries-list__deaths', data: 'TotalDeaths', parentClassName: 'global__deaths',
    };
    this.globalRecovered = {
      className: 'countries-list__recovered', data: 'TotalRecovered', parentClassName: 'global__recovered',
    };
    this.lastDayCases = {
      className: 'countries-list__cases', data: 'NewConfirmed', parentClassName: 'last__cases',
    };
    this.lastDayDeaths = {
      className: 'countries-list__deaths', data: 'NewDeaths', parentClassName: 'last__deaths',
    };
    this.lastDayRecovered = {
      className: 'countries-list__recovered', data: 'NewRecovered', parentClassName: 'last__recovered',
    };
    this.statisticsNameElements = [];
    this.arrCountriesListElement = [];
  }

  renderLists(parentNode) {
    const countries = this.covidDataService.summary.Countries;
    // global
    countries.sort((start, end) => end.TotalConfirmed - start.TotalConfirmed);
    this.renderList(countries, parentNode, this.globalCases);

    countries.sort((start, end) => end.TotalDeaths - start.TotalDeaths);
    this.renderList(countries, parentNode, this.globalDeaths);

    countries.sort((start, end) => end.TotalRecovered - start.TotalRecovered);
    this.renderList(countries, parentNode, this.globalRecovered);

    // last day
    countries.sort((start, end) => end.NewConfirmed - start.NewConfirmed);
    this.renderList(countries, parentNode, this.lastDayCases);

    countries.sort((start, end) => end.NewDeaths - start.NewDeaths);
    this.renderList(countries, parentNode, this.lastDayDeaths);

    countries.sort((start, end) => end.NewRecovered - start.NewRecovered);
    this.renderList(countries, parentNode, this.lastDayRecovered);

    // per 100k
  }

  // className: 'countries-list__cases', data: 'TotalConfirmed', parentClassName: 'global__cases',
  renderList(countries, parentNode, meta) {
    this.wrapperCountriesList = {
      elementName: 'div', classNames: meta.parentClassName, parent: parentNode,
    };
    this.arrCountriesListElement.push(createDOMElement(this.wrapperCountriesList));
    countries.forEach((element) => {
      this.createRow(this.arrCountriesListElement[this.arrCountriesListElement.length - 1]);
      this.createRowWrapper();
      this.createCasesWrapper();
      this.createFlag(element);
      this.createNameCountry(element);
      this.createCountryCovidInfo(meta.className, element[meta.data].toString());
    });
  }

  createRow(parentNode) {
    this.rowList = {
      elementName: 'div', classNames: 'countries-list__row', parent: parentNode,
    };
    this.rowElement = createDOMElement(this.rowList);
  }

  createCasesWrapper() {
    this.wrapperCases = {
      elementName: 'div', classNames: 'countries-list__wrapper-cases', parent: this.rowElement,
    };
    this.wrapperCasesElement = createDOMElement(this.wrapperCases);
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

  createCountryCovidInfo(className, covidInfo) {
    this.CovidInfo = {
      elementName: 'div', classNames: className, children: covidInfo, parent: this.wrapperCasesElement,
    };
    createDOMElement(this.CovidInfo);
  }
}
