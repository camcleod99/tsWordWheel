// Select the button
var elementButtonStart = document.getElementById('controls-start');
var elementButtonAnswer = document.getElementById('controls-word');
var elementButtonList = document.getElementById('controls-list');
// Add event listener
elementButtonStart.addEventListener('click', function () {
    var url = 'https://jsonplaceholder.typicode.com/posts/1';
    // Fetch data from the API
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
    })
        .catch(function (error) {
        // Handle the error
        console.error('Error:', error);
    });
});
elementButtonAnswer.addEventListener('click', function () {
    var url = 'https://jsonplaceholder.typicode.com/posts/2';
    // Fetch data from the API
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
    })
        .catch(function (error) {
        // Handle the error
        console.error('Error:', error);
    });
});
elementButtonList.addEventListener('click', function () {
    var url = 'https://jsonplaceholder.typicode.com/posts/3';
    // Fetch data from the API
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
    })
        .catch(function (error) {
        // Handle the error
        console.error('Error:', error);
    });
});
