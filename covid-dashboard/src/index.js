import Covid19Api, { createDivHtml } from './scripts/countries';
import './css/style.scss';
import './css/country-cases-statictics.scss';

const covid19api = new Covid19Api();
setTimeout(() => {
  createDivHtml(covid19api);
}, 2000);
