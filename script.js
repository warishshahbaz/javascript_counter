let count = 0;
const counterElement = document.getElementById("counter");
const clearButton = document.getElementById("clearButton");
const errorMessage = document.getElementById("errorMessage");

function updateCounter() {
  counterElement.textContent = count;
  clearButton.style.display = count === 0 ? "none" : "block";
  errorMessage.style.display = count < 0 ? "block" : "none";
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  if (count === 0) {
    errorMessage.style.display = "block"; // Display error message if count is already 0
  } else {
    count--;
    updateCounter();
    if (count < 0) {
      errorMessage.style.display = "block"; // Display error message if count goes below 0 after decrement
    } else {
      errorMessage.style.display = "none"; // Hide error message if count is greater than or equal to 0
    }
  }
}

function clearCounter() {
  count = 0;
  updateCounter();
}
