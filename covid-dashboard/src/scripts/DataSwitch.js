import createDOMElement from './createDOMElement';
import '../css/dataSwitch.scss';

export default class CountryDataSwitch {
  constructor(arrCountriesListElement) {
    this.arrCountriesListElement = arrCountriesListElement;
  }

  renderDataSwitch(parentNode) {
    this.createSelectData(parentNode);
    this.createSelectDataType(parentNode);

    this.createOption(this.selectDataElement, 'Cases', 'cases');
    this.createOption(this.selectDataElement, 'Deaths', 'deaths');
    this.createOption(this.selectDataElement, 'Recovered', 'recovered');

    this.createOption(this.selectDataTypeElement, 'Global', 'global');
    this.createOption(this.selectDataTypeElement, 'Last day', 'last');
    this.createOption(this.selectDataTypeElement, 'Per 100k', 'per');
  }

  createButton(parentNode, childrenName, value) {
    this.option = {
      elementName: 'div', classNames: 'button__data', children: childrenName, parent: parentNode,
    };
    this.optionCasesElement = createDOMElement(this.option);
    this.optionCasesElement.value = value;
  }

  showList() {
    console.log(this.selectDataElement.value);
    console.log(this.arrCountriesListElement);
  }
}
