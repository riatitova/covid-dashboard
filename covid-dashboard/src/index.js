import { combineLatest } from 'rxjs';
import CovidDataService from './scripts/CovidDataService';
import Loader from './scripts/Loader';
import App from './scripts/App';
import CountryService from './scripts/CountryService';

const countryDataService = new CountryService();
const covidDataService = new CovidDataService();
const loader = new Loader();

const source$ = combineLatest([loader.getCovidData(), loader.getCountryData()]);
source$.subscribe(results => {
  const [covidData, countryData] = results;
  covidDataService.covidDataResponse = covidData;
  countryDataService.countriesDataResponse = countryData;
  const app = new App(countryDataService, covidDataService);
  app.init();
});
