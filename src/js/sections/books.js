import { getBooks } from './getBooks';
import { createBooksMarkup } from './createBooksMarkup';
import { createBooksCategories } from './createBooksMarkup';

const bookContainer = document.querySelector('.books-container');

window.addEventListener('load', async () => {
  const response = await getBooks(); // make API request for books
  const books = response.data;
  const markup = createBooksMarkup(books); // create HTML markup
  bookContainer.innerHTML = markup; // add markup to the DOM

  const categories = response.data;
  const markupCategories = createBooksCategories(categories)
  bookContainer.insertAdjacentElement = markupCategories; // add markup to the DOM
});


