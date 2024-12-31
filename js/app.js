// Array of wishes to display in different languages
const wishes = {
  en: [
    "Wishing you and your loved ones",
    "a prosperous New Year!",
    "May 2025",
    "bring joy",
    "health",
    "success to you all!",
    "From Ouedraogo’s Family with love!"
  ],
  fr: [
    "Vous souhaitant, à vous et vos proches,",
    "une nouvelle année prospère!",
    "Que 2025",
    "vous apporte joie,",
    "santé,",
    "succès à vous tous!",
    "Avec amour de la famille Ouedraogo!"
  ],
  es: [
    "Deseándote a ti y a tus seres queridos",
    "un próspero Año Nuevo!",
    "Que 2025",
    "te traiga alegría,",
    "salud,",
    "éxito a todos!",
    "Con amor de la familia Ouedraogo!"
  ],
};


// Function to detect user location and set the language
async function detectLocationAndTranslate() {
  try {
    // Fetch geolocation data
    const response = await fetch("https://ip-api.com/json/");
    const data = await response.json();

    // Determine the user's language based on their country
    let userLanguage = "en"; // Default to English
    if (data.countryCode === "FR") userLanguage = "fr";
    else if (data.countryCode === "ES") userLanguage = "es";
    // Add more country codes and languages if needed

    // Display wishes in the user's language
    displayWishes(userLanguage);
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    // Fallback to English if geolocation fails
    displayWishes("en");
  }
}

// Function to display wishes dynamically
let currentWishIndex = 0;

function displayWishes(language) {
  const wishesContainer = document.getElementById("wishes");
  const languageWishes = wishes[language] || wishes["en"]; // Fallback to English if language is not available

  function showWish() {
    if (currentWishIndex < languageWishes.length) {
      const wishElement = document.createElement("div");
      wishElement.className = "wish";
      wishElement.textContent = languageWishes[currentWishIndex];

      // Clear previous wish and add the new one
      wishesContainer.innerHTML = "";
      wishesContainer.appendChild(wishElement);

      currentWishIndex++;
      setTimeout(showWish, 3000); // Show each wish for 3 seconds
    }
  }

  showWish();
}

// Start the process
detectLocationAndTranslate();
