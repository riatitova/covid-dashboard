import createDOMElement from './createDOMElement';
import '../css/dataSwitch.scss';

export default class DataSwitch {
  constructor() {
    this.listButtons = [
      'Global cases',
      'Global deaths',
      'Global recovered',
      'Last day cases',
      'Last day deaths',
      'Last day recovered',
      'Per 100k cases',
      'Per 100k deaths',
      'Per 100k recovered',
    ];
  }

  renderDataSwitch(parentNode) {
    this.createSwitchData(parentNode);

    this.listButtons.forEach(element => {
      this.createSwitchButton(element);
    });
  }

  createSwitchData(parentNode) {
    this.wrapperDataSwitch = {
      elementName: 'div', classNames: 'data-switch__wrapper', parent: parentNode,
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
