import axios from 'axios';
import { getAllBooksByCategory } from './getAllBooksByCategory';
import {createAllBooksByCategoryMarkup} from './createAllBooksByCategoryMarkup';

// Event listener to the document
document.addEventListener('click', async function (event) {
  if (event.target.classList.contains('books-category-js')) {
    event.preventDefault();
    // Category from the "data-category" attribute of the button
    const category = event.target.dataset.category;
    const response = await getAllBooksByCategory(); // make API request for books
    const allBooks = response.data;
    bookContainer.innerHTML = createAllBooksByCategoryMarkup(allBooks, category);
  }
});
