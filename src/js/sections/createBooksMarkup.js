// import { getBooksByCategory } from './getBooksByCategory';
// import { renderBooks } from './renderBooks';

const bookContainer = document.querySelector('.books-container');

// Top 5 books markup
function createBooksMarkup(arr, category) {
  const markup = arr
    .map(book => {
      const card = book.books
        .map(element => {
          const { book_image, title, author, _id } = element;
          return `<li class="book-card__container" id="${_id}">
          <div class="book-card__image-container book-card__image-container--margin-bottom"><img data-modal-open class="book-card__image book-card__image--margin-bottom" src="${book_image}" alt="${title}" loading="lazy"/>
          </div>
          <h3 data-modal-open class="book-card__title book-card__title--margin-bottom">${title}</h3>
          <p class="book-card__author">${author}</p>
        </li>`;
        })
        .join('');
      return `
        <li class="book-card">
          <h2 class="header-two header-two--margin-bottom">${book.list_name}</h2>
          <ul class="book-card__section book-card__section--margin-bottom">${card}</ul>
          <a class="books-category-js button button--right-flex" href="#" data-category="${book.list_name}">See More</a>
        </li>
      `;
    })
    .join('');

  // bookContainer.insertAdjacentHTML('beforeend', markup);

  // bookContainer.addEventListener('click', async (event) => {
  //   event.preventDefault();
  //   const target = event.target;

  //   if (target.classList.contains('books-category-js')) {
  //     const selectedCategory = target.getAttribute('data-category');
  //     const booksResponse = await getBooksByCategory(selectedCategory);

  //     if (booksResponse && booksResponse.data) {
  //       renderBooks(booksResponse.data, selectedCategory);

  //       const bookButtons = document.querySelectorAll('.book button');
  //       bookButtons.forEach(button => {
  //         button.addEventListener('click', async (event) => {
  //           const bookId = event.currentTarget.getAttribute('data-book-id');
  //           const bookDetails = await getBookById(bookId);
  //           renderBookDetails(bookDetails);
  //         });
  //       });
  //     }
  //   }
  // });

  bookContainer.innerHTML = markup;

  return markup;
}

export { createBooksMarkup };
