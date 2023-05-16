import { getAllBooksByCategory } from './getAllBooksByCategory';
import { createAllBooksByCategoryMarkup } from './createAllBooksByCategoryMarkup';
import { getBooks } from './getBooks';
import { createBooksMarkup } from './createBooksMarkup';

const bookContainer = document.querySelector('.books-container');

window.addEventListener('load', async () => {
  const response = await getBooks(); // make API request for books
  const books = response.data;
  const markup = createBooksMarkup(books); // create HTML markup
});

// See more button clicked - show 20 books
document.addEventListener('click', async function (event) {
  if (event.target.classList.contains('books-category-js')) {
    event.preventDefault();

    const categoryId = event.target.getAttribute('data-category');
    const books = await getAllBooksByCategory(categoryId);
    const result = books.response.data;

    const markupCategory = createAllBooksByCategoryMarkup(result, categoryId);
    bookContainer.innerHTML = markupCategory;
  }
});
