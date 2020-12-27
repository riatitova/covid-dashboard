import createDOMElement from './createDOMElement';
import '../css/table.scss';
import FullScreenButton from './FullScreenButton';


export default class Table {
  constructor(parentNode) {
    this.wrapperElement = parentNode;
  }

  renderTable() {
    this.createTable();
  }

  createTable() {
    this.table = {
      elementName: 'div', classNames: 'table', parent: this.wrapperElement,
    };
    this.tableElement = createDOMElement(this.table);
    const fullScreenButton = new FullScreenButton(this.tableElement);
    fullScreenButton.createFullScreenButton();

  }
}
