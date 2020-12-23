import createDOMElement from './createDOMElement';
import CountryLists from './CountriesList';
import '../css/dataSwitch.scss';

export default class DataSwitch {
  constructor(covidDataService, countriesDataService) {
    this.covidDataService = covidDataService;
    this.countriesDataService = countriesDataService;

    this.listButtons = [
      'Global cases',
      'Global deaths',
      'Global recovered',
      'Last day cases',
      'Last day deaths',
      'Last day recovered',
      'Per 100k cases',
      'Per 100k deaths',
      'Per 100k recovered',
    ];
  }

  renderDataSwitch(parentNode) {
    this.createSwitchData(parentNode);

    this.listButtons.forEach(element => {
      this.createSwitchButton(element);
    });
  }

  createSwitchData(parentNode) {
    this.wrapperDataSwitch = {
      elementName: 'div', classNames: 'data-switch__wrapper', parent: parentNode,
    };
    this.wrapperDataSwitchElement = createDOMElement(this.wrapperDataSwitch);
  }

  createSwitchButton(childrenContent) {
    this.switchButton = {
      elementName: 'div', classNames: 'data-switch__button', children: childrenContent, parent: this.wrapperDataSwitchElement,
    };
    this.switchButtonElement = createDOMElement(this.switchButton);
    this.switchButtonElement.addEventListener('click', (e) => {
      console.log(e.target.textContent);
      const contriesList = new CountryLists();
      contriesList.countriesDataService = this.countriesDataService;
      contriesList.covidDataService = this.covidDataService;
      contriesList.renderLists('TotalConfirmed');
      // contriesList.renderLists(e.target.textContent);
    });
  }
}
