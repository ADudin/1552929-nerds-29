const contactsButton = document.querySelector(".contacts-button");
const popup = document.querySelector(".popup");
const popupClose = popup.querySelector(".popup-close");
const formContainer = popup.querySelector(".form-container");
const userName = popup.querySelector(".user-name");
const userEmail = popup.querySelector(".user-email");
const userComment = popup.querySelector(".user-comment");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("comment");
} catch (err) {
    isStorageSupport = false;
}

contactsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    if (storage) {
        userName.value = storage;
        userEmail.value = storage;
        userComment.focus();
    } else {
        userName.focus();
    }
});

popupClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("popup-error");
});

formContainer.addEventListener("submit", function(evt) {
    if (!userName.value || !userEmail.value || !userComment.value) {
        evt.preventDefault();
        popup.classList.remove("popup-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("comment", userName.value, userEmail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            evt.preventDefault();
            popup.classList.remove("popup-show");
            popup.classList.remove("popup-error");
        }
    }
});

/* Slider */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("slider-button");
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (let i = 0; i < slides.length; i++) { slides[i].classList.remove("slide-current"); }
    for (let i = 0; i < dots.length; i++) { dots[i].classList.remove("current") };
    slides[slideIndex - 1].classList.add("slide-current");
    dots[slideIndex - 1].classList.add("current");
};