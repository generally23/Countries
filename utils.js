function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function createGroups(countries) {
  const groupObject = {};
  const groups = [];

  countries.forEach(country => {
    const initial = country.name[0];

    if (!groupObject[initial]) {
      groupObject[initial] = { groupName: initial, countries: [country] };
    } else {
      groupObject[initial].countries.push(country);
    }
  });

  return Object.values(groupObject);
}

async function getCountries() {
  const url = 'http://restcountries.eu/rest/v2/all';
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
