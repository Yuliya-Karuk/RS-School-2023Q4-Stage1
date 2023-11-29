class Slider {
  constructor() {
    this.sliderButtonLeft = document.querySelector('.slider__btn_left');
    this.sliderButtonRight = document.querySelector('.slider__btn_right');
    this.slider = document.querySelector('.slider_list');
    this.paginationBtns = document.querySelectorAll('.pagination__btn');
    this.paginationBtnActive = document.querySelector('.pagination__btn_active');
    this.sliderItems = 3;
    this.currentSlide = 0;
  }

  findNextSlide(offset) {
    this.currentSlide += offset;
    if (this.currentSlide > 2) this.currentSlide = 0;
    if (this.currentSlide < 0) this.currentSlide = 2;
  }

  move() {
    this.slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  restartSlider() {
    this.generateConst();
    this.currentSlide = 0;
    this.fillPagination();
    this.move();
  }

  bindListeners() {
    const context = this;
    document.addEventListener('DOMContentLoaded', () => context.fillPagination());
    // window.addEventListener('resize', () => context.restartSlider());

    this.sliderButtonRight.addEventListener('click', () => {
      this.findNextSlide(1);
      this.move();
      // context.fillPagination();
    });

    this.sliderButtonLeft.addEventListener('click', () => {
      this.findNextSlide(-1);
      this.move();
      // context.fillPagination();
    });
  }
}

export default Slider;
