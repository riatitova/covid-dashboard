import createDOMElement from './createDOMElement';
import '../css/globalCases.scss';

export default class GlobalCases {
  constructor(covidResponse, parentNode) {
    this.covidResponse = covidResponse;
    this.globalCases = {
      elementName: 'div',
      classNames: 'globalCases',
      children: 'Global cases',
      parent: parentNode,
    };
  }

  renderGlobalCases(response) {
    this.globalCases = createDOMElement(this.globalCases);
    this.currentCases = response;
    const cases = {
      elementName: 'span',
      classNames: 'globalCases__amount',
      children: `${this.currentCases}`,
      parent: this.globalCases,
    };
    this.amountOfCases = createDOMElement(cases);
  }

  getGlobalCases() {
    const response = this.covidResponse.getSummaryGlobal().NewConfirmed;
    this.renderGlobalCases(response);
    return this.cases;
  }
}
