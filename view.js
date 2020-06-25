const popupLoader = $('.popup-loader');
const countriesContainer = $('.countries');
const searchInput = $('.search');
const contentElement = $('.main');
const popupCountry = $('.modal');
const popupCountryElement = $('.modal .country');
const popupCountryCloserBtn = $('.modal__closer__btn');

function toggleModal() {
  popupCountry.classList.toggle('modal--toggle');
}

function insertCountries(html) {
  countriesContainer.innerHTML = html;
}

function addClass(element, className) {
  element.classList.add(className);
}

function hidePopupLoader() {
  addClass(popupLoader, 'popup-loader--hide');
}

function slideInContent() {
  addClass(contentElement, 'main--enter');
}

function createGroupHTML({ groupName, countries }) {
  return `
         <div class="group">
         <h2 class="group__name">${groupName}</h2>
             <div class="carousel">
                 <div class="carousel__slider">
                     ${createCountriesHTML(countries)}
                 </div>
             </div>
         </div>
     `;
}

function createGroupsHTML(groups) {
  console.log(groups);
  return groups.map(createGroupHTML).join('');
}

function createCountryHTML({ name = '', flag = '' }) {
  return `
    <div class='country' data-id='${name.toLowerCase()}'>
        <div>
            <img class='country__flag' src='${flag}' alt='flag of ${name}'>
        </div>
        <h4 class='country__name'>${name}</h4>
    </div>
  `;
}

function createCountriesHTML(countries) {
  return countries.map(createCountryHTML).join('');
}

function detailCountry(countryInfo) {
  const { flag, capital, name } = countryInfo;
  return `
    <h1 class="country__name">${name}</h1>
    <div class="country__left">
      <div class="country__flag">
        <img
          class="country__flag__img"
          src="${flag}"
          alt="Flag of ${name}"
        />
      </div>
      <div class="country__details">
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Capital:</div>
          <div class="country__detail__value">${capital}</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Population:</div>
          <div class="country__detail__value">13 Million</div>
        </div>
        <div class="country__detail">
          <div class="country__detail__name">Languages:</div>
          <div class="country__detail__value">
            Pular, Soussou, Malinke
          </div>
        </div>
      </div>
    </div>
    <div class="country__right">
      <div class="map" id="map"></div>
    </div>
  `;
}

function appendHTML(element, content) {
  element.innerHTML = content;
}

function revealCountry(country) {
  popupCountryElement.innerHTML = detailCountry(country);

  const { latlng } = country;

  const latitude = latlng[0];
  const longitude = latlng[1];

  createMap(longitude, latitude);
}

function createMap(longitude, latitude) {
  const accessToken =
    'pk.eyJ1IjoiZXJpa3NlbjIzIiwiYSI6ImNrMm10OHJpZTBsZ28zbW83aWkyNmI2NDEifQ.oyTeBDi6JSmAvTimkPekfw';
  var map = new mapboxgl.Map({
    accessToken,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 2,
  });

  const marker = new mapboxgl.Marker({ color: 'red' });
  marker.setLngLat([longitude, latitude]).addTo(map);
}

function appendScript(src) {
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}

function toggleBodyScroll() {
  const bodyOverflow = document.body.style.overflow;

  document.body.style.overflow = bodyOverflow ? '' : 'hidden';
}
