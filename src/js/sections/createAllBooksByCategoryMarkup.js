// 20 books by category markup
const bookContainer = document.querySelector('.books-container');

function createAllBooksByCategoryMarkup(arr, category) {
    const markup = arr
      .map(book => {
        const card = book.books
          .map(element => {
            const { book_image, title, author } = element;
            return `<li class="book-card__container">
            <div class="book-card__image-container book-card__image-container--margin-bottom"><img data-modal-open class="book-card__image book-card__image--margin-bottom" src="${book_image}" alt="${title}" loading="lazy"/>
            </div>
            <h3 data-modal-open class="book-card__title book-card__title--margin-bottom">${title}</h3>
            <p class="book-card__author">${author}</p>
          </li>`;
          })
          .join('');
        return `
          <li class="book-card">
            <h2 class="header-two header-two--margin-bottom">${category} ${book.list_name}</h2>
            <ul class="book-card__section book-card__section--margin-bottom">${card}</ul>
          </li>
        `;
      })
      .join('');
  
    bookContainer.innerHTML = markup;
  
    return markup;
  }
  

export { createAllBooksByCategoryMarkup };
