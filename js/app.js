// Array of wishes to display
const wishes = [
  "Wishing you and your loved ones", "a prosperous New Year!",
  "May 2025 "," bring joy", "health", "success to you all!",
  "From Ouedraogo’s Family with love!",
];

// Target the wishes container
const wishesContainer = document.getElementById("wishes");

// Function to animate wishes
let currentWishIndex = 0;

function displayWishes() {
  if (currentWishIndex < wishes.length) {
    // Create a new wish element
    const wishElement = document.createElement("div");
    wishElement.className = "wish";
    wishElement.textContent = wishes[currentWishIndex];

    // Add the wish to the container
    wishesContainer.innerHTML = ""; // Clear previous wishes
    wishesContainer.appendChild(wishElement);

    // Increment the index and set timeout for the next wish
    currentWishIndex++;
    setTimeout(displayWishes, 3000); // Show each wish for 3 seconds
  }
}

// Start the animation
displayWishes();
