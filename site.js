let imagePosition = 0;
const images = document.getElementsByClassName('carou_item');
const allImages = images.length;

document.getElementById('carou_button--next').addEventListener("click", function() {
    nextImage()
})

document.getElementById('carou_button--prev').addEventListener("click", function() {
    prevImage()
})

function majImage() {
    for (let image of images) {
        image.classList.remove('carou_item--visible');
        image.classList.add('carou_item--hidden');
    }
    images[imagePosition].classList.add('carou_item--visible');
}

function nextImage() {
    if (imagePosition == allImages - 1) {
        imagePosition = 0;
    } else {
        imagePosition++; 
    }
    majImage();
}

function prevImage() {
    if (imagePosition == 0) {
        imagePosition = allImages - 1;
    } else {
        imagePosition--;
    }
    majImage();
}

var intervalId = window.setInterval(function(){
    nextImage();
  }, 3500);