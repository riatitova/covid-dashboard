import createDOMElement from './createDOMElement';
import CovidDataService from './CovidDataService';
import '../css/globalCases.scss';

export default class GlobalCases {
  constructor() {
    this.globalCases = {
      elementName: 'div',
      classNames: 'globalCases',
      children: 'globalCases',
      parent: document.body,
    };
  }

  renderGlobalCases(promise) {
    this.globalCases = createDOMElement(this.globalCases);
    this.currentCases = promise;
    const cases = {
      elementName: 'span',
      classNames: 'globalCases__amount',
      children: `${this.currentCases}`,
      parent: this.globalCases,
    };
    this.amountOfCases = createDOMElement(cases);
  }

  getGlobalCases() {
    this.cases = new CovidDataService()
      .getSummaryGlobal()
      .then(response => this.renderGlobalCases(response.TotalConfirmed));
    return this.cases;
  }
}
