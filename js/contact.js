const contactsButton = document.querySelector(".contacts-button");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const formContainer = document.querySelector(".form-container");
const userName = document.querySelector(".user-name");
const userEmail = document.querySelector(".user-email");
const userComment = document.querySelector(".user-comment");

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
            localStorage.setItem("comment", userName.value, userEmail.value, userComment.value);
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