/**
 * displaySlide - this function displays picture slides in the slideshow-container 
 * @param n: The current slide to be displayed
 * @returns: no return value 
 */
function displaySlide (n) {
    var slides  = document.getElementsByClassName("mySlides");
    function resetZindex () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.zIndex = 0;
        }
    }
    resetZindex();
    slides[n].style.zIndex = 1;
}



