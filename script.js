const moodButtons = document.querySelectorAll(".mood");
const greeting = document.getElementById("greeting");

// Load saved mood on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedMood = localStorage.getItem("mood");
  if (savedMood) {
    greetUser(savedMood);
  }
});

// Handle mood button clicks
moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.dataset.mood;
    localStorage.setItem("mood", mood);
    greetUser(mood);
  });
});

function greetUser(mood) {
  greeting.textContent = `You’re feeling ${mood} today. Got it!`;
}

