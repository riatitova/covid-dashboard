import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export default class Loader {
  constructor() {
    this.serverCovidData = 'https://api.covid19api.com/summary';
    this.serverCountryData = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag';
  }

  getCovidData() {
    const result$ = fromFetch(this.serverCovidData).pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        }
        return of({ error: true, message: `Error ${response.status}` });
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message });
      }),
    );
    return result$;
  }

  getCountryData() {
    const result$ = fromFetch(this.serverCountryData).pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        }
        return of({ error: true, message: `Error ${response.status}` });
      }),
      catchError(err => {
        console.error(err);
        return of({ error: true, message: err.message });
      }),
    );
    return result$;
  }
}
