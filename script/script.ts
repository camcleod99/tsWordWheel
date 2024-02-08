// Select the button
const elementButtonStart = document.getElementById('controls-start') as HTMLButtonElement;
const elementButtonAnswer = document.getElementById('controls-word') as HTMLButtonElement;
const elementButtonList = document.getElementById('controls-list') as HTMLButtonElement;

// Add event listener
elementButtonStart.addEventListener('click', function() {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Fetch data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
});

elementButtonAnswer.addEventListener('click', function() {
  const url = 'https://jsonplaceholder.typicode.com/posts/2';

// Fetch data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
});

elementButtonList.addEventListener('click', function() {
  const url = 'https://jsonplaceholder.typicode.com/posts/3';

// Fetch data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      // Handle the error
      console.error('Error:', error);
    });
});