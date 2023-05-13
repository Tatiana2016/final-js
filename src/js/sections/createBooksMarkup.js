const bookContainer = document.querySelector('.books-container');

function createBooksMarkup(arr) {
  const markup = arr
    .map(book => {
      const card = book.books
        .map(element => {
          const { book_image, title, author } = element;
          return `<li class="book-card__container">
          <img class="book-card__image" src="${book_image}" alt="${title}" loading="lazy"/>
          <h3 class="book-card__title">${title}</h3>
          <p class="book-card__author">${author}</p>
        </li>`;
        })
        .join('');
      return `
        <li class="book-card">
          <h2 class="header-two">${book.list_name}</h2>
          <ul class="book-card__section">${card}</ul>
          <a class="button" href="">See More</a>
        </li>
      `;
    })
    .join('');

  bookContainer.insertAdjacentHTML('beforeend', markup);

  return markup;
}

export { createBooksMarkup };

// //Function for Books Categories
// function createBooksCategories(arr) {
//   const markup = arr
//     .map(book => {
//       return `
//       <h2>${book.list_name}</h2>
//     `;
//     })
//     .join('');

//   bookContainer.insertAdjacentHTML('beforebegin', markup);
//   return markup;
// }

// export { createBooksCategories };
