const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const slides = document.querySelectorAll(".home .slides-container .slide");
const header = document.querySelector(".header");

let index = 0;

// JavaScript to toggle the
// visibility of the navigation menu
document.addEventListener("DOMContentLoaded",
	function () {
		const hamburger = document.getElementById("hamburger");
		const navbar = document.querySelector(".navbar");

		hamburger.addEventListener("click", function () {
			navbar.classList.toggle("active");
		});
	});

window.addEventListener("scroll", () => {
	navbar.classList.remove("active");
});

function showSlide(nextIndex) {
	slides[index].classList.remove("active");
	index = (nextIndex + slides.length) % slides.length;
	slides[index].classList.add("active");
}

function next() {
	showSlide(index + 1);
}

function prev() {
	showSlide(index - 1);
}



document.addEventListener("DOMContentLoaded", () => {
	const themeToggle = document.getElementById("theme-toggle");
	const body = document.body;

	// Check for saved theme in localStorage
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme === "dark") {
		body.classList.add("dark-mode");
		themeToggle.textContent = "Light Mode";
	}

	// Toggle theme on button click
	themeToggle.addEventListener("click", () => {
		body.classList.toggle("dark-mode");
		if (body.classList.contains("dark-mode")) {
			themeToggle.textContent = "Light Mode";
			localStorage.setItem("theme", "dark");
		} else {
			themeToggle.textContent = "Dark Mode";
			localStorage.setItem("theme", "light");
		}
	});
});