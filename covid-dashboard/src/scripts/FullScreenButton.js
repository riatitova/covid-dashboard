import createDOMElement from './createDOMElement';
import '../css/fullScreen.scss';
import fullScreenImage from '../assets/img/fullScreen.svg';

export default class FullScreenButton {
  constructor(parentNode) {
    this.parentNode = parentNode;
  }

  createFullScreenButton() {
    this.fullScreenButton = {
      elementName: 'div', classNames: 'full-screen__button', parent: this.parentNode,
    };
    this.fullScreenButtonElement = createDOMElement(this.fullScreenButton);
    this.fullScreenButtonElement.addEventListener('click', this.pressFullScreenButton);

    this.fullScreenButtonImage = {
      elementName: 'img', classNames: 'full-screen__image', parent: this.fullScreenButtonElement,
    };
    this.fullScreenButtonImageElement = createDOMElement(this.fullScreenButtonImage);
    this.fullScreenButtonImageElement.src = fullScreenImage;
  }

  pressFullScreenButton() {
    this.parentNode.classList.toggle('parent__full');
  }
}
