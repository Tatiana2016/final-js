
import { bookContainer } from './createBooksMarkup.js';
import { getAllBooksByCategory } from './getAllBooksByCategory';
import {createAllBooksByCategoryMarkup} from './createAllBooksByCategoryMarkup';
import { getBooks } from './getBooks';
import { getBooks } from './getBooks';
import { createBooksMarkup } from './createBooksMarkup';
const bookContainer = document.querySelector('.books-container');

window.addEventListener('load', async () => {
  const response = await getBooks(); // make API request for books
  const books = response.data;

  const markup = createBooksMarkup(books); // create HTML markup

});

// Event listener to the document
document.addEventListener('click', async function (event) {
  let categoryId = document.querySelector(`#${_id}`)
  const books = await getAllBooksByCategory(categoryId)
  const result = books.response.data;
  if (event.target.classList.contains('books-category-js')) {
    event.preventDefault();
    
   const markupCategory = createAllBooksByCategoryMarkup(result)
   bookContainer.innerHTML = createAllBooksByCategoryMarkup(markupCategory, category);
  }
});
