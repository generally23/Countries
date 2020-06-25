(async function () {
  const countries = await getCountries();
  const groups = createGroups(countries);
  const groupsHTML = createGroupsHTML(groups);

  setTimeout(() => {
    // hide popup loader
    hidePopupLoader();
    // slide in content
    slideInContent();
    // append html
    insertCountries(groupsHTML);

    appendScript('carousel.js');
  }, 2000);

  const onCountryClicked = e => {
    // get clicked element
    const { target } = e;
    // get country element
    const countryElement = target.closest('.country');
    // stop if country was not the closest target
    if (!countryElement) return;
    // get Clicked country's id
    const countryId = countryElement.dataset.id;
    // find country in countries
    const country = countries.find(c => c.name.toLowerCase() === countryId);
    // stop here if no country is found
    if (!country) return;
    // toggle the modal
    toggleModal();
    // don't allow scroll on body element
    toggleBodyScroll();
    // show the country clicked to the UI
    revealCountry(country);
  };

  const onCloseModal = e => {
    toggleModal();
    // make body scrollable
    toggleBodyScroll();
  };

  const onSearchCountry = e => {
    const searchValue = e.target.value;

    if (!searchValue) return;

    console.log(searchValue);
  };

  const setupEventListeners = () => {
    countriesContainer.addEventListener('click', onCountryClicked);
    popupCountryCloserBtn.addEventListener('click', onCloseModal);
    searchInput.addEventListener('input', onSearchCountry);
  };

  setupEventListeners();
})();
