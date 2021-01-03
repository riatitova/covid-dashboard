import createDOMElement from '../createDOMElement';
import FooterContent from './footerContent';
import '../../css/footer.scss';

export default class Footer {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'footer',
      classNames: 'footer',
      parent: this.parent,
    };
  }

  renderFooter() {
    this.footerElement = createDOMElement(this.data);
    this.footerContent = new FooterContent(this.footerElement);
  }
}
