// Typing Effect
const typedText = document.querySelector(".typed-text");
const phrases = ["Web Development", "Creativity", "UI/UX"]; // Array of phrases to type
let i = 0; // Index for phrases array
let j = 0; // Index for characters in the current phrase
let isDeleting = false; // Flag to determine typing or deleting state

function typeEffect() {
    const currentPhrase = phrases[i]; // Get the current phrase to type

    if (!isDeleting) {
        // Typing phase
        typedText.textContent += currentPhrase[j];
        j++;
    } else {
        // Deleting phase
        typedText.textContent = currentPhrase.substring(0, j - 1);
        j--;
    }

    // Determine timing and transition between typing and deleting
    if (!isDeleting && j === currentPhrase.length) {
        // Finished typing the current phrase, start deleting after a delay
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
        return;
    } else if (isDeleting && j === 0) {
        // Finished deleting, move to the next phrase
        isDeleting = false;
        i = (i + 1) % phrases.length; // Loop back to the first phrase
    }

    // Adjust typing and deleting speed
    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
typeEffect();

// Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let isValid = true; // Validation flag

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(error => error.remove());

    // Validate Name
    if (name.value.trim() === "") {
        showError(name, "Name is required.");
        isValid = false;
    }

    // Validate Email
    if (email.value.trim() === "") {
        showError(email, "Email is required.");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Enter a valid email address.");
        isValid = false;
    }

    // Validate Message
    if (message.value.trim().length < 10) {
        showError(message, "Message must be at least 10 characters long.");
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});

// Function to show error messages
function showError(element, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.style.marginTop = "5px";
    error.textContent = message;
    element.parentElement.appendChild(error);
}

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Video Play Continuously
const video = document.getElementById("background-video");

// Ensure the video starts playing when the page loads
window.addEventListener("DOMContentLoaded", () => {
    video.play();
});

// Prevent video from stopping or restarting when mouse enters or leaves
const homeSection = document.getElementById("home");
homeSection.addEventListener("mouseenter", () => {
    if (video.paused) {
        video.play();
    }
});

homeSection.addEventListener("mouseleave", () => {
    if (video.paused) {
        video.play();
    }
});


