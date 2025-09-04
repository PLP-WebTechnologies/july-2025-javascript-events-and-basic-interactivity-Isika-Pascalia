// =========================
// THEME TOGGLE (Dark/Light)
// =========================
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Toggle Light Mode"
        : "🌙 Toggle Dark Mode";
});

// =========================
// COUNTER GAME
// =========================
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});

// =========================
// FAQ SECTION TOGGLE
// =========================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

// =========================
// FORM VALIDATION
// =========================
const form = document.getElementById("signup-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Get form fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const nameError = nameInput.nextElementSibling;
    const emailError = emailInput.nextElementSibling;
    const passwordError = passwordInput.nextElementSibling;

    // Reset error messages
    nameError.style.display = emailError.style.display = passwordError.style.display = "none";
    successMessage.textContent = "";

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        emailError.style.display = "block";
        valid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        valid = false;
    }

    // Success message
    if (valid) {
        successMessage.textContent = "✅ Form submitted successfully!";
        form.reset();
    }
});
