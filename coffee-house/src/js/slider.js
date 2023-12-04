const SliderConst = {
  numberOfSlide: 3,
  slideTime: 5000,
};

class Slider {
  constructor() {
    this.sliderParent = document.querySelector('.slider');
    this.sliderButtonLeft = document.querySelector('.slider__btn_left');
    this.sliderButtonRight = document.querySelector('.slider__btn_right');
    this.slider = document.querySelector('.slider_list');
    this.sliderItems = document.querySelectorAll('.slider__item');
    this.paginationBars = document.querySelectorAll('.pagination__bar');
    this.currentSlide = 0;
    this.paginationBtnActive = this.paginationBars[this.currentSlide].firstElementChild;
    this.timeStep = 10;
    this.filledSpace = 0;
    this.isSwiped = false;
  }

  fillPagination(start = true) {
    if (start) {
      this.interval = setInterval(this.fillStep.bind(this), SliderConst.slideTime / this.timeStep);
    }
    if (!start) {
      clearInterval(this.interval);
    }
  }

  fillStep() {
    if (this.filledSpace >= 100) {
      this.changeSlide(1);
    } else {
      this.filledSpace += this.timeStep;
      this.paginationBtnActive.style.width = `${this.filledSpace}%`;
    }
  }

  findNextSlide(offset) {
    this.currentSlide += offset;
    if (this.currentSlide > SliderConst.numberOfSlide - 1) this.currentSlide = 0;
    if (this.currentSlide < 0) this.currentSlide = SliderConst.numberOfSlide - 1;
  }

  changePgnBar() {
    for (let i = 0; i < this.paginationBars.length; i += 1) {
      this.paginationBars[i].firstElementChild.style.width = 0;
    }
    this.paginationBtnActive = this.paginationBars[this.currentSlide].firstElementChild;
  }

  changeSlide(offset) {
    this.findNextSlide(offset);
    this.move();
    this.changePgnBar();
    this.filledSpace = 0;
  }

  move() {
    this.slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  bindListeners() {
    this.sliderButtonRight.addEventListener('click', () => this.changeSlide(1));
    this.sliderButtonLeft.addEventListener('click', () => this.changeSlide(-1));

    for (let i = 0; i < this.sliderItems.length; i += 1) {
      this.sliderItems[i].addEventListener('mouseover', () => this.fillPagination(false));
      this.sliderItems[i].addEventListener('mouseout', () => this.fillPagination());
    }

    this.sliderParent.addEventListener('touchstart', (e) => {
      this.touchStart = e.targetTouches[0].clientX;
      this.fillPagination(false);
    });

    this.sliderParent.addEventListener('touchmove', (e) => {
      this.touchEnd = e.changedTouches[0].clientX;
      this.isSwiped = true;
    });

    this.sliderParent.addEventListener('touchend', (e) => {
      if (e.cancelable && this.isSwiped) {
        e.preventDefault();
        const side = this.touchStart - this.touchEnd > 0 ? 1 : -1;
        this.changeSlide(side);
        this.isSwiped = false;
      }
      this.fillPagination();
    });
  }
}

export default Slider;
