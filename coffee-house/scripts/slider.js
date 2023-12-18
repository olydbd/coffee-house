let timer;
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let controls = document.getElementsByClassName("control");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < controls.length; i++) {
    controls[i].className = controls[i].className.replace(" active", "");
  }
  controls[slideIndex-1].className += " active";

  if (slideIndex === 1) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(0)"
    }
  } else if (slideIndex === 2) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-100%)"
    }
  } else if (slideIndex === 3) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-200%)"
    }
  }

  clearTimeout(timer);
  timer = setTimeout(() => plusSlides(1), 2000);
}