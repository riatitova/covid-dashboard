import createDOMElement from './createDOMElement';
import '../css/table.scss';

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
  }
}
