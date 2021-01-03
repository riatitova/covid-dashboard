import createDOMElement from '../createDOMElement';
import '../../css/menu.scss';

export default class Menu {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'div',
      classNames: 'header__menu',
      children: null,
      parent: this.parent,
    };

    this.renderMenu();
  }

  renderMenu() {
    this.menuElement = createDOMElement(this.data);
  }

  toggleMenu() {
    this.menuElement.classList.toggle('header__menu_visible');
  }
}
