// Select the button
const startGameButton = document.getElementById('start-game') as HTMLButtonElement;

// Add event listener
startGameButton.addEventListener('click', function() {
  // URL of the API
  const url = 'https://api.example.com/data';

  // Fetch data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Get the letters from the data
      const letters = data.letters;

      // Get the letter elements
      const letterElements = document.querySelectorAll('.letter');

      // Update the letters in the wordwheel
      for (let i = 0; i < letters.length; i++) {
        letterElements[i].textContent = letters[i];
      }
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
});