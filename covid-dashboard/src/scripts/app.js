import MainContent from './MainContent';

export default class App {
  constructor(countriesData, covidData) {
    this.countriesDataService = countriesData;
    this.covidDataService = covidData;
  }

  init() {
    this.covidAllCases = this.covidDataService.summary;
    const mainPage = new MainContent(this.countriesDataService, this.covidDataService);
    mainPage.renderMainPage();
  }
}
