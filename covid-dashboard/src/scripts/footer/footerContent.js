import createDOMElement from '../createDOMElement';
import FooterLinks from './footerLinks';
import logo from '../../assets/img/rs_school_js.svg';
import '../../css/footerContent.scss';

export default class FooterContent {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'div',
      classNames: 'footer__content',
      children: null,
      parent: this.parent,
    };

    this.renderFooterContent();
  }

  renderFooterContent() {
    this.footerContentElement = createDOMElement(this.data);
    this.renderFooterLeft();
    this.renderFooterRight();
  }

  renderFooterLeft() {
    const leftData = {
      elementName: 'div',
      classNames: 'footer__left',
      children: null,
      parent: this.footerContentElement,
    };

    this.leftElement = createDOMElement(leftData);
    this.renderFooterYear();
    this.linksElement = new FooterLinks(this.leftElement);
  }

  renderFooterYear() {
    const yearData = {
      elementName: 'span',
      classNames: 'footer__year',
      children: '2020',
      parent: this.leftElement,
    };

    this.yearElement = createDOMElement(yearData);
  }

  renderFooterRight() {
    const rightData = {
      elementName: 'div',
      classNames: 'footer__right',
      children: null,
      parent: this.footerContentElement,
    };

    this.rightElement = createDOMElement(rightData);
    this.renderFooterImg();
  }

  renderFooterImg() {
    const footerLogoData = {
      elementName: 'img',
      classNames: 'footer__logo',
      children: null,
      parent: this.rightElement,
    };

    this.footerLogoElement = createDOMElement(footerLogoData);
    this.footerLogoElement.src = `${logo}`;
  }
}
