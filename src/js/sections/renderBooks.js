import axios from 'axios';

function renderBooks(books, currentCategoryTitle) {
  const heading = document.querySelector('.header-one');
  const container = document.querySelector('.books-container');
  container.innerHTML = '';

  if (!Array.isArray(books) || books.length === 0) {
    container.innerHTML = '<p>No books found</p>';
    return;
  }

  const bookElements = books.map(book => {
    const image = `
       <div class="book-margin-bottom"><img data-modal-open class="book-card__image book-card__image--margin-bottom" src="${book.book_image}" alt="${book.title}" loading="lazy" data-modal-open loading="lazy"/>
            </div>`;
    const title = `<h3 class="book-card__title book-card__title--margin-bottom" data-modal-open>${book.title}</h3>`;
    const description = `<p class="book-card__author">${book.author}</p>`;
    
    return `
    <ul class="books-container-category books-container-category--margin-bottom">
      <li id="${book._id}" class="book-card__component"> 
        ${image}
        ${title}
        ${description}    
      </li>
  </ul>
    `;
  });
  heading.textContent = currentCategoryTitle;
  container.classList.add('books-container-category');
  container.innerHTML = `
    
    ${bookElements.join('')}
  `
}


async function getBookById(id) {
  try {
    const { data } = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getBookById, renderBooks, renderBookDetails };
