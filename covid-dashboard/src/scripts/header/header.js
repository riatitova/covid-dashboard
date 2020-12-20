import createDOMElement from '../createDOMElement';
import HeaderContent from './headerContent';

export default class Header {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'div',
      classNames: 'header',
      children: null,
      parent: document.body,
    };
  }

  renderHeader() {
    this.headerElement = createDOMElement(this.data);
    this.HeaderContent = new HeaderContent(this.headerElement);
  }
}

const header = new Header();
header.renderHeader();
