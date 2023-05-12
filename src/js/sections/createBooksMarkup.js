const bookContainer = document.querySelector('.books-container');

function createBooksMarkup(arr) {
  let heading = '';
  const markup = arr
    .map(book => {
      return book.books
        .map(element => {
          element.list_name;
          element.books;
          heading = element.list_name;

          const { book_image, title, author } = element;

          return `
        <li class="book-card">
       
          <div class="book-card__container">
            <img class="book-card__image" src="${book_image}" alt="${title}" loading="lazy"/>
            <h3 class="book-card__title">${title}</h3>
            <p class="book-card__author">${author}</p>
          </div>
        </li>
      `;
        })
        .join('');
    })
    .join('');

  bookContainer.insertAdjacentHTML('beforeend', markup);

  return markup;
}

export { createBooksMarkup };
