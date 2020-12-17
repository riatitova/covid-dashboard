import createDOMElement from '../createDOMElement';
import Menu from './Menu';

export default class Burger {
  constructor(parent) {
    this.parent = parent || null;
    this.data = {
      elementName: 'div',
      classNames: 'header__burger',
      children: null,
      parent: this.parent,
    };

    this.renderBurger();
    this.addHandlers();
  }

  renderBurger() {
    this.burgerElement = createDOMElement(this.data);
    this.menu = new Menu(this.parent);
    this.renderBurgerLines();
  }

  renderBurgerLines() {
    const linesData = {
      elementName: 'span',
      classNames: 'line',
      children: null,
      parent: this.burgerElement,
    };

    this.linesElement = createDOMElement(linesData);
  }

  toggleBurger() {
    this.burgerElement.classList.toggle('header__burger_active');
  }

  addHandlers() {
    this.burgerElement.addEventListener('click', () => {
      this.toggleBurger();
      this.menu.toggleMenu();
    });
  }
}
