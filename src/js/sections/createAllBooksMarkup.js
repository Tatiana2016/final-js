import axios from 'axios';
import { getAllBooksByCategory } from './getAllBooksByCategory';
import {createAllBooksByCategoryMarkup} from './createAllBooksByCategoryMarkup';
import { getBooks } from './getBooks';

const bookContainer = document.querySelector('.books-container');

// Event listener to the document
document.addEventListener('click', async function (event) {
  const books = await getBooks()
  const result = books.response.data;
  if (event.target.classList.contains('.books-category-js')) {
    event.preventDefault();
    // Category from the "data-category" attribute of the button
    const category = event.target.dataset.category;
    const response = await getAllBooksByCategory(category); // make API request for books
    const allBooks = response.data;
    bookContainer.innerHTML = createAllBooksByCategoryMarkup(allBooks, category);
  }
});

