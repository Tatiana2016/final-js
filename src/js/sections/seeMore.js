import { getBooksSeeMore } from './getBooksSeeMore';
import { getBookByIdSeeMore } from './renderSeeMoreBooks';

const bookContainer = document.querySelector('.books-container');

bookContainer.addEventListener('click', async event => {
  event.preventDefault();
  const target = event.target;

  if (target.classList.contains('books-category-js')) {
    const selectedCategory = target.getAttribute('data-category');
    const booksResponse = await getBooksSeeMore(selectedCategory);

    if (booksResponse && booksResponse.data) {
      const bookButtons = document.querySelectorAll('.book button');
      bookButtons.forEach(button => {
        button.addEventListener('click', async event => {
          const bookId = event.currentTarget.getAttribute('data-book-id');
          const bookDetails = await getBookByIdSeeMore(bookId);
          renderBookDetails(bookDetails);
        });
      });
    }
  }
});
