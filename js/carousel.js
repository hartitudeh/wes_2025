// This example uses pure CSS animation for looping.
// JS is optional, but here’s an example for pausing on hover.

const carouselTrack = document.querySelector(".carousel-track");

carouselTrack.addEventListener("mouseenter", () => {
  carouselTrack.style.animationPlayState = "paused";
});

carouselTrack.addEventListener("mouseleave", () => {
  carouselTrack.style.animationPlayState = "running";
});


