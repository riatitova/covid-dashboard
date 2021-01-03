import createDOMElement from '../createDOMElement';
import Burger from './Burger';
import '../../css/headerContent.scss';

export default class HeaderContent {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'div',
      classNames: 'header__content',
      children: null,
      parent: this.parent,
    };

    this.renderHeaderContent();
  }

  renderHeaderContent() {
    this.HeaderContentElement = createDOMElement(this.data);
    this.renderHeaderTitle();
    this.burger = new Burger(this.HeaderContentElement);
  }

  renderHeaderTitle() {
    const titleData = {
      elementName: 'h1',
      classNames: 'header__title',
      children: 'covid-19 dashboard',
      parent: this.HeaderContentElement,
    };

    this.titleElement = createDOMElement(titleData);
  }
}
