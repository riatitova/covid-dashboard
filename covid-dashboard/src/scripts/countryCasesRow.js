import createDOMElement from './createDOMElement';
import CountryService from './CountryService';

export default class CountryCasesRow {
  constructor() {
    this.statisticsNameElements = [];
  }

  renderRowList(countries, parentNode) {
    countries.forEach((element) => {
      this.createRow(parentNode);
      this.createRowWrapper();
      this.createFlag(element);
      this.createNameCountry(element);
      this.createCasesCountry(element);
    });
  }

  createRow(parentNode) {
    this.rowList = {
      elementName: 'div', classNames: 'countries-list__row', parent: parentNode,
    };
    this.rowElement = createDOMElement(this.rowList);
  }

  createRowWrapper() {
    this.wrapper = {
      elementName: 'div', classNames: 'countries-list__row__wrapper', parent: this.rowElement,
    };
    this.wrapperElement = createDOMElement(this.wrapper);
  }

  createFlag(element) {
    this.statisticsFlag = {
      elementName: 'IMG', classNames: 'countries-list__row__wrapper__flag', parent: this.wrapperElement,
    };
    const img = createDOMElement(this.statisticsFlag);
    this.addFlag(element.country, img);
  }

  createNameCountry(element) {
    this.statisticsName = {
      elementName: 'div', classNames: 'countries-list__row__wrapper__name', children: element.country, parent: this.wrapperElement,
    };
    this.statisticsNameElements.push(createDOMElement(this.statisticsName));
  }

  createCasesCountry(element) {
    this.statisticsCases = {
      elementName: 'div', classNames: 'countries-list__row__cases', children: element.cases.toString(), parent: this.rowElement,
    };
    createDOMElement(this.statisticsCases);
  }

  addFlag(countryName, img) {
    const imgNode = img;
    this.flag = new CountryService().getFlagByName(countryName)
      .then(response => {
        imgNode.src = response;
      });
  }
}
