import L from 'leaflet';
import WorldData from 'world-map-geojson';
import createDOMElement from './createDOMElement';
import 'leaflet/dist/leaflet.css';

const tooMuchCasesColor = '#f03b20';
const middleCasesColor = '#feb24c';
const lowCasesColor = '#ffeda0';

export default class Map {
  constructor(covidData, parentNode) {
    this.accessToken = 'pk.eyJ1IjoicmlhdGl0b3ZhIiwiYSI6ImNrajBhMTcxOTRsMTkzMnFqeG9vdzJrc2sifQ.okZUnFgKjK-kDmFDr-iNGw';
    this.mapboxTiles = L.tileLayer(
      `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=${this.accessToken}`,
      {
        attribution:
          '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        tileSize: 512,
        zoomOffset: -1,
      },
    );
    this.mapbox = {
      elementName: 'div',
      classNames: 'page-content__map',
      parent: parentNode,
    };
    this.covidDataService = covidData;
    this.style = this.style.bind(this);
  }

  renderMap() {
    this.mapbox = createDOMElement(this.mapbox);
    this.map = L.map(this.mapbox).addLayer(this.mapboxTiles).setView([0, 0], 1.5);

    L.geoJSON(WorldData).addTo(this.map);
    L.geoJson(WorldData, { style: this.style }).addTo(this.map);
  }

  style(country) {
    return {
      fillColor: this.getColor(country.properties.name),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  }

  getColor(name) {
    const isCountry = this.covidDataService.getCountryDataByName(name) !== undefined;
    if (isCountry) {
      const cases = this.covidDataService.getCountryDataByName(name).TotalConfirmed;
      let casesColor = lowCasesColor;
      casesColor = cases > 100000 ? middleCasesColor : casesColor;
      casesColor = cases > 1000000 ? tooMuchCasesColor : casesColor;
      return casesColor;
    }
    return null;
  }
}
