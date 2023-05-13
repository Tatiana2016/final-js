const bookContainer = document.querySelector('.books-container');

function createBooksMarkup(arr) {
  const markup = arr
    .map(book => {
      return book.books
        .map(element => {
          element.list_name;
          element.books;
          heading = element.list_name;

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

  // bookContainer.insertAdjacentHTML('beforebegin', heading);
  bookContainer.insertAdjacentHTML('beforeend', markup);

  return markup;
}

export { createBooksMarkup };

//Function for Books Categories
function createBooksCategories(arr) {
  const markup = arr
    .map(book => {
      return `
      <h2>${book.list_name}</h2>
    `;
    })
    .join('');

  bookContainer.insertAdjacentHTML('beforebegin', markup);
  console.log(markup);
  return markup;
}

export { createBooksCategories };

