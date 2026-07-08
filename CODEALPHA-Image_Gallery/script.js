let images = document.querySelectorAll(".gallery img");

let popup = document.getElementById("popup");
let popupImage = document.getElementById("popupImage");

let close = document.getElementById("close");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

let currentImage = 0;

// Open image
for (let i = 0; i < images.length; i++) {

    images[i].onclick = function () {

        currentImage = i;

        popup.style.display = "block";

        popupImage.src = images[currentImage].src;
    };
}

// Close popup
close.onclick = function () {
    popup.style.display = "none";
};

// Next image
next.onclick = function () {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    popupImage.src = images[currentImage].src;
};

// Previous image
previous.onclick = function () {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    popupImage.src = images[currentImage].src;
};