let imagePos = 0;
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
    images[imagePos].classList.add('carou_item--visible');
}

function nextImage() {
    if (imagePos == allImages - 1) {
        imagePos = 0;
    } else {
        imagePos++; 
    }
    majImage();
}

function prevImage() {
    if (imagePos == 0) {
        imagePos = allImages - 1;
    } else {
        imagePos--;
    }
    majImage();
}