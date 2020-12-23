import createDOMElement from './createDOMElement';
import CountryLists from './CountriesList';
import '../css/dataSwitch.scss';

export default class DataSwitch {
  constructor(covidDataService, countriesDataService) {
    this.covidDataService = covidDataService;
    this.countriesDataService = countriesDataService;

    this.listButtons = [
      { childrenContent: 'Global cases', value: 'TotalConfirmed', className: 'countries-list__cases' },
      { childrenContent: 'Global deaths', value: 'TotalDeaths', className: 'countries-list__deaths' },
      { childrenContent: 'Global recovered', value: 'TotalRecovered', className: 'countries-list__recovered' },
      { childrenContent: 'Last day cases', value: 'NewConfirmed', className: 'countries-list__cases' },
      { childrenContent: 'Last day deaths', value: 'NewDeaths', className: 'countries-list__deaths' },
      { childrenContent: 'Last day recovered', value: 'NewRecovered', className: 'countries-list__recovered' },
      // пока что заглушки стоят TotalConfirmed
      { childrenContent: 'Per 100k cases', value: 'TotalConfirmed', className: 'countries-list__cases' },
      { childrenContent: 'Per 100k deaths', value: 'TotalConfirmed', className: 'countries-list__deaths' },
      { childrenContent: 'Per 100k recovered', value: 'TotalConfirmed', className: 'countries-list__recovered' },
    ];
    this.arrSwitchButtons = [];
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

  createSwitchButton(buttonInfo) {
    this.switchButton = {
      elementName: 'div', classNames: 'data-switch__button', children: buttonInfo.childrenContent, parent: this.wrapperDataSwitchElement,
    };
    this.switchButtonElement = createDOMElement(this.switchButton);
    this.switchButtonElement.setAttribute('value', buttonInfo.value);
    this.switchButtonElement.setAttribute('name', buttonInfo.className);
    this.arrSwitchButtons.push(this.switchButtonElement);
  }

  setEventListeners() {
    this.wrapperDataSwitchElement.addEventListener('click', e => {
      const attribute = e.target.getAttribute('value');
      if (attribute !== null) {
        const contriesList = new CountryLists(this.statistic.list);
        contriesList.countriesDataService = this.countriesDataService;
        contriesList.covidDataService = this.covidDataService;
        contriesList.renderCountriesList(attribute, e.target.getAttribute('name'));
        this.statistic.statisticsNameElements = contriesList.statisticsNameElements;
      }
    });
  }
}
