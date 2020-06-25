(function () {
  const carousels = $$('.carousel');

  const classes = {
    controllers: 'carousel__controller',
    get prevBtn() {
      return this.controllers + '--' + 'previous';
    },
    get nextBtn() {
      return this.controllers + '--' + 'next';
    },
  };

  const getCarouselWidth = carouselElement => carouselElement.clientWidth;

  const getCarouselSlides = carouselElement => {
    carouselElement.querySelectorAll('.country');
  };

  const getCarouselSlider = carouselElement => {
    return carouselElement.querySelector('.carousel__slider');
  };

  const getCarouselScrollWidth = carouselElement => {
    return carouselElement.scrollWidth;
  };

  const carouselNeedControllers = carouselElement => {
    if (
      getCarouselScrollWidth(carouselElement) >
      getCarouselWidth(carouselElement)
    )
      return true;
    return false;
  };

  const slideElement = (element, distance) => {
    element.style.transform = `translate3d(-${distance}px, 0, 0)`;
  };

  const addClasses = (element, classes) => element.classList.add(...classes);

  const createControllers = (c1Classes = [], c2Classes = []) => {
    const previousBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    // add classes to controllers
    addClasses(previousBtn, c1Classes);
    addClasses(nextBtn, c2Classes);

    return {
      previousBtn,
      nextBtn,
    };
  };

  const appendToCarousel = (carouselElement, ...elements) => {
    carouselElement.append(...elements);
  };

  const initCarousel = carouselElement => {
    if (!carouselNeedControllers(carouselElement)) return;

    const carouselWidth = getCarouselWidth(carouselElement);
    const carouselScrollWidth = getCarouselScrollWidth(carouselElement);
    const translateAmount = carouselScrollWidth - carouselWidth;
    let distance = 0;

    // create carousel controllers
    const { previousBtn, nextBtn } = createControllers(
      [classes.controllers, classes.prevBtn],
      [classes.controllers, classes.nextBtn]
    );

    const onPrevBtnClick = e => {
      distance -= distance > carouselWidth ? carouselWidth : distance;
      slideElement(getCarouselSlider(carouselElement), distance);
    };

    const onNextBtnClick = e => {
      const invisibleArea = translateAmount - distance;
      distance += invisibleArea > carouselWidth ? carouselWidth : invisibleArea;

      slideElement(getCarouselSlider(carouselElement), distance);
    };

    previousBtn.addEventListener('click', onPrevBtnClick);
    nextBtn.addEventListener('click', onNextBtnClick);

    appendToCarousel(carouselElement, previousBtn, nextBtn);
  };

  carousels.forEach(initCarousel);
})();
