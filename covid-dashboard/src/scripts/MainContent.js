import createDOMElement from './createDOMElement';
import DataSwitch from './dataSwitch';
import GlobalData from './GlobalCases';
import Header from './header/header';
import '../css/mainContent.scss';

export default class MainContent {
  constructor(countriesData, covidData) {
    this.countriesDataService = countriesData;
    this.covidDataService = covidData;
  }

  renderMainPage() {
    this.createMainPage();

    const header = new Header(this.mainPageElement);
    header.renderHeader();

    const dataSwitch = new DataSwitch();
    dataSwitch.renderDataSwitch(this.mainPageElement);

    this.cratePageContent();
    this.createFooter();
    this.createWrapperLeft();

    const globalCases = new GlobalData(this.covidDataService, this.wrapperLeftElement);
    globalCases.renderGlobalData();

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
      elementName: 'div', classNames: 'page-content__wrapper-left', parent: this.pageContentElement,
    };
    this.wrapperLeftElement = createDOMElement(this.wrapperLeft);
  }

  createList() {
    this.list = {
      elementName: 'div', classNames: 'page-content__list', parent: this.wrapperLeftElement,
    };
    this.listElement = createDOMElement(this.list);
  }

  createWrapperRight() {
    this.wrapperRight = {
      elementName: 'div', classNames: 'page-content__wrapper-right', parent: this.pageContentElement,
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
