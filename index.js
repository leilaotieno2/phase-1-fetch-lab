const fetch = require('your/fetch/module/path');

function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Received response with status ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderBooks(data)); // Call renderBooks with the data received from the API
}

function renderBooks(data) {
  // Render the book titles into the DOM
}

fetchBooks(); // Call fetchBooks to initiate the fetch request and render the book titles into the DOM
