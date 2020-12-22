import createDOMElement from './createDOMElement';
import '../css/globalCases.scss';

export default class GlobalData {
  constructor(covidResponse, parentNode) {
    this.covidResponse = covidResponse;
    this.globalCases = {
      elementName: 'div',
      classNames: 'globalCases',
      children: 'Global cases',
      parent: parentNode,
    };
  }

  renderGlobalData(response) {
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

  getGlobalData() {
    const response = this.covidResponse.getSummaryGlobal().NewConfirmed;
    this.renderGlobalData(response);
    return this.cases;
  }
}
