const navToggleBtn = document.getElementById("navToggleBtn");
const navLinks = document.querySelector("nav");

navToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav");
});

const xButton = document.getElementById("xButton");

// Add a click event listener to the toggle button
navToggleBtn.addEventListener("click", () => {
    // Toggle the "rotate" class on the xButton
    xButton.classList.toggle("rotate");
});

const home = document.getElementById("home");

navToggleBtn.addEventListener("click", () => {
    home.classList.toggle("move-section");
});

const ToDoList = document.getElementById("toDoList");

navToggleBtn.addEventListener("click", () => {
    toDoList.classList.toggle("move-section-todo");
});

const quotes = document.getElementById("quotes");

navToggleBtn.addEventListener("click", () => {
    quotes.classList.toggle("move-section-quotes");
});

const goals = document.getElementById("goals");

navToggleBtn.addEventListener("click", () => {
    goals.classList.toggle("move-section-goals");
});


const contact = document.getElementById("contact");

navToggleBtn.addEventListener("click", () => {
    contact.classList.toggle("move-section-contact");
});


const homeTitle = document.getElementById("homeTitle");

navToggleBtn.addEventListener("click", () => {
    homeTitle.classList.toggle("move-text");
});


