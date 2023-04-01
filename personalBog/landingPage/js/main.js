/**
  * showOverflowingContent - function that enables a slideshow to ...
  * show overflowing content by scrolling horizontally.
  * @function
  * @name showOverflowingContent
  * @example
  * showOverflowingContent();
  * @returns {void}
*/


function showOverflowingContent() {
    const container = document.querySelector('.slideshow-container');
    const nextBtn = document.querySelector('.next-slide');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        container.scrollLeft += container.offsetWidth;
      } else {
        currentSlide = 0;
        container.scrollLeft = 0;
      }
    });
    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        if (index === slides.length - 1 && currentSlide === index) {
          currentSlide = 0;
          container.scrollLeft = 0;
        }
      });
    });
  }



/**
 * showPreviousOverflow - function that enables a slideshow to show previous ...
 * overflowing content by scrolling horizontally.
 * @function
 * @name showPreviousOverflow
 * @example
 * showPreviousOverflow();
 * @returns {void}
*/

function showPreviousOverflow() {
  const container = document.querySelector('.slideshow-container');
  const previousBtn = document.querySelector('.previous');
  previousBtn.addEventListener('click', () => {
    container.scrollLeft -= container.offsetWidth;
  });
}
