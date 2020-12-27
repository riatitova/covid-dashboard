import createDOMElement from './createDOMElement';
import '../css/globalCases.scss';
import FullScreenButton from './FullScreenButton';

export default class GlobalData {
  constructor(covidResponse, parentNode) {
    this.covidResponse = covidResponse;
    this.globalCases = {
      elementName: 'div',
      classNames: 'globalCases',
      parent: parentNode,
    };
  }

  renderGlobalData(response) {
    this.globalCases = createDOMElement(this.globalCases);
    const fullScreenButton = new FullScreenButton(this.globalCases);
    fullScreenButton.createFullScreenButton();
    this.currentCases = response;
    const wrapperGlobalData = {
      elementName: 'span',
      classNames: 'globalCases__wrapper',
      children: 'Global cases',
      parent: this.globalCases,
    };
    this.wrapperGlobalDataElement = createDOMElement(wrapperGlobalData);
    this.createGlobalData(`${this.currentCases}`);
  }

  createGlobalData(currentCases) {
    this.globalData = {
      elementName: 'div',
      classNames: 'globalCases__data',
      children: currentCases,
      parent: this.wrapperGlobalDataElement,
    };
    this.globalDataElement = createDOMElement(this.globalData);
  }

  getGlobalData() {
    const response = this.covidResponse.getSummaryGlobal().NewConfirmed;
    this.renderGlobalData(response);
    return this.cases;
  }
}
