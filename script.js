let currentSlideIndex = 0;
const images = [
  "images/mom-photo.jpg",
  "images/photo1.jpg", 
  "images/photo2.jpg", 
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg",
  "images/photo10.jpg"
];

function openSlideShow(index) {
  currentSlideIndex = index;
  const slideshowImage = document.getElementById("slideshowImage");
  slideshowImage.src = images[currentSlideIndex];
  document.getElementById("slideshowModal").style.display = "flex";
}

function closeSlideShow() {
  document.getElementById("slideshowModal").style.display = "none";
}

function changeSlide(direction, event) {
  // Prevent the click from bubbling to the modal container
  if (event) {
    event.stopPropagation();
  }
  currentSlideIndex += direction;
  if (currentSlideIndex < 0) currentSlideIndex = images.length - 1;
  if (currentSlideIndex >= images.length) currentSlideIndex = 0;
  
  const slideshowImage = document.getElementById("slideshowImage");
  slideshowImage.src = images[currentSlideIndex];
}
