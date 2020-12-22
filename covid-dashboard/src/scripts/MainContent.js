import createDOMElement from './createDOMElement';
import DataSwitch from './dataSwitch';
import GlobalCases from './GlobalCases';
import '../css/mainContent.scss';

export default class MainContent {
  renderMainPage() {
    this.createMainPage();
    this.createHeader();

    const dataSwitch = new DataSwitch();
    dataSwitch.renderDataSwitch(this.mainPageElement);

    this.cratePageContent();
    this.createFooter();

    this.createWrapperLeft();

    // this.createGlobalData();
    const globalCases = new GlobalCases(this.wrapperLeftElement);
    globalCases.renderGlobalCases();

    this.createList();

    this.createWrapperRight();
    this.createMap();

    this.createWrapper();
    this.createTable();
    this.createChart();
  }

  createMainPage() {
    this.mainPage = {
      elementName: 'div', classNames: 'main-page', parent: document.body,
    };
    this.mainPageElement = createDOMElement(this.mainPage);
  }

  createHeader() {
    this.header = {
      elementName: 'header', classNames: 'header', parent: this.mainPageElement,
    };
    this.headerElement = createDOMElement(this.header);
  }

  createFooter() {
    this.footer = {
      elementName: 'footer', classNames: 'footer', parent: this.mainPageElement,
    };
    this.footerElement = createDOMElement(this.footer);
  }

  cratePageContent() {
    this.pageContent = {
      elementName: 'div', classNames: 'page-content', parent: this.mainPageElement,
    };
    this.pageContentElement = createDOMElement(this.pageContent);
  }

  createWrapperLeft() {
    this.wrapperLeft = {
      elementName: 'div', classNames: 'page-content__wrapper_left', parent: this.pageContentElement,
    };
    this.wrapperLeftElement = createDOMElement(this.wrapperLeft);
  }

  createGlobalData() {
    this.globalData = {
      elementName: 'div', classNames: 'page-content__global-data', parent: this.wrapperLeftElement,
    };
    this.globalDataElement = createDOMElement(this.globalData);
  }

  createList() {
    this.list = {
      elementName: 'div', classNames: 'page-content__list', parent: this.wrapperLeftElement,
    };
    this.listElement = createDOMElement(this.list);
  }

  createWrapperRight() {
    this.wrapperRight = {
      elementName: 'div', classNames: 'page-content__wrapper_right', parent: this.pageContentElement,
    };
    this.wrapperRightElement = createDOMElement(this.wrapperRight);
  }

  createMap() {
    this.map = {
      elementName: 'div', classNames: 'page-content__map', parent: this.wrapperRightElement,
    };
    this.mapElement = createDOMElement(this.map);
  }

  createWrapper() {
    this.wrapper = {
      elementName: 'div', classNames: 'page-content__wrapper', parent: this.wrapperRightElement,
    };
    this.wrapperElement = createDOMElement(this.wrapper);
  }

  createTable() {
    this.table = {
      elementName: 'div', classNames: 'page-content__table', parent: this.wrapperElement,
    };
    this.tableElement = createDOMElement(this.table);
  }

  createChart() {
    this.chart = {
      elementName: 'div', classNames: 'page-content__chart', parent: this.wrapperElement,
    };
    this.chartElement = createDOMElement(this.chart);
  }
}
