import createDOMElement from '../createDOMElement';
import FooterContent from './footerContent';

export default class Footer {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'footer',
      classNames: 'footer',
      children: null,
      parent: document.body,
    };
  }

  renderFooter() {
    this.footerElement = createDOMElement(this.data);
    this.footerContent = new FooterContent(this.footerElement);
  }
}

const footer = new Footer();
footer.renderFooter();
