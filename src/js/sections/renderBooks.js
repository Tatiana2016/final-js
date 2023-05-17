import axios from 'axios';

function renderBooks(books, currentCategoryTitle) {
  const container = document.querySelector('.books-container');
  container.innerHTML = '';

  if (!Array.isArray(books) || books.length === 0) {
    container.innerHTML = '<p>No books found</p>';
    return;
  }

  const bookElements = books.map(book => {
    const image = `
       <img class="book-card__image" src="${book.book_image}" alt="${book.title}" loading="lazy" data-modal-open>
      `;
    const title = `<h3 class="book-card__title book-card__title--margin-bottom" data-modal-open>${book.title}</h3>`;
    const description = `<p class="book-card__author">${book.author}</p>`;
    
    return `
    <ul class="book-card">
      <li id="${book._id}" class="book-card__image-container book-card__image-container--margin-bottom">      
        ${image}
        ${title}
        ${description}    
      </li>
  </ul>
    `;
  });

  container.innerHTML = `
    <h2>${currentCategoryTitle}</h2>
    ${bookElements.join('')}
  `;
}


async function getBookById(id) {
  try {
    const { data } = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

//function renderBookDetails(bookDetails) {
  // Ви можете використовувати bookDetails для відображення деталей книги у вашому шаблоні HTML
  // Наприклад:
  //const modal = document.createElement('div');
  //modal.classList.add('modal');
  //modal.innerHTML = `
    //<h2>${bookDetails.title}</h2>
    //<p>${bookDetails.author}</p>
    //<p>${bookDetails.description}</p>
  //`;

  // Додайте modal до DOM, наприклад, до document.body або до іншого контейнера, який ви використовуєте для модального вікна

  // Ви можете також застосувати стилі до modal, використовуючи CSS-класи або задаючи стилі прямо тут
//}

export { getBookById, renderBooks, renderBookDetails };
