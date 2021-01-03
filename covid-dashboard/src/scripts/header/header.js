import createDOMElement from '../createDOMElement';
import HeaderContent from './headerContent';
import '../../css/header.scss';

export default class Header {
  constructor(parentNode) {
    this.data = {
      elementName: 'div',
      classNames: 'header',
      children: null,
      parent: parentNode,
    };
  }

  renderHeader() {
    this.headerElement = createDOMElement(this.data);
    this.HeaderContent = new HeaderContent(this.headerElement);
  }
}
