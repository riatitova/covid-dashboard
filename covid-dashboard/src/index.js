import Covid19Api, { createDivHtml } from './countries';

const covid19api = new Covid19Api();
setTimeout(() => {
  createDivHtml(covid19api);
}, 700);
