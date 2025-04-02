// Section Navigation
function showSection(sectionId) {
  document.querySelectorAll("section").forEach((sec) => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

// FAQ Toggle
function toggleFaq(faqItem) {
  faqItem.classList.toggle("open");
}

// Slider Logic
let slideIndex = 0;
let intervalId;

function showSlides() {
  const slides = document.querySelector(".slider-container");
  if (slides) {
    const totalSlides = document.querySelectorAll(".slide").length;
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

function changeSlide(n) {
  clearInterval(intervalId);
  const slides = document.querySelector(".slider-container");
  if (slides) {
    const totalSlides = document.querySelectorAll(".slide").length;
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    intervalId = setInterval(showSlides, 3000); // Restart interval
  }
}

// Initialize Slider and Default Section
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slider-container");
  if (slides) {
    slides.style.transform = `translateX(0%)`; // Start at first slide
    intervalId = setInterval(showSlides, 3000); // Auto-slide every 3s
  }
  showSection("home"); // Show home section by default
});

// Form Submission (Demo)
const form = document.querySelector("#contact form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent! (Demo Only)");
  });
}