import createDOMElement from './createDOMElement';
import '../css/dataSwitch.scss';

export default class DataSwitch {
  renderDataSwitch(parentNode) {
    this.createSwitchData(parentNode);
    this.createSwitchButton('Global cases');
    this.createSwitchButton('Global deaths');
    this.createSwitchButton('Global recovered');
    this.createSwitchButton('Last day cases');
    this.createSwitchButton('Last day deaths');
    this.createSwitchButton('Last day recovered');
    this.createSwitchButton('Per 100k cases');
    this.createSwitchButton('Per 100k deaths');
    this.createSwitchButton('Per 100k recovered');
  }

  createSwitchData(parentNode) {
    this.wrapperDataSwitch = {
      elementName: 'div', classNames: 'data-switch__wrapper', children: null, parent: parentNode,
    };
    this.wrapperDataSwitchElement = createDOMElement(this.wrapperDataSwitch);
  }

  createSwitchButton(childrenContent) {
    this.switchButton = {
      elementName: 'div', classNames: 'data-switch__button', children: childrenContent, parent: this.wrapperDataSwitchElement,
    };
    this.switchButtonElement = createDOMElement(this.switchButton);
  }
}
