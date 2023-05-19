import axios from 'axios';

function renderBooks(books, currentCategoryTitle) {
  const heading = document.querySelector('.header-one');
  const container = document.querySelector('.books-container');
  container.innerHTML = '';

  if (!Array.isArray(books) || books.length === 0) {
    container.innerHTML = '<p>No books found</p>';
    return;
  }

  function capitalizeWords(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  const words = currentCategoryTitle.split(' ');
  const wordsPerPart = Math.ceil(words.length / 2);
  const categoryPart1 = words.slice(0, wordsPerPart).join(' ');
  const categoryPart2 = words.slice(wordsPerPart).join(' ');

  const categoryMarkup = `
    <span class="header-one">${capitalizeWords(categoryPart1)} </span>
    <span class="header-one--accent">${capitalizeWords(
      categoryPart2
    ).trim()}</span>
  `;

  const bookElements = books.map(book => {
    const image = `
       <div class="book-margin-bottom"><img data-modal-open class="book-card__image book-card__image--margin-bottom" src="${book.book_image}" alt="${book.title}" loading="lazy" data-modal-open loading="lazy"/>
            </div>`;
    const title = `<h3 class="book-card__title book-card__title--margin-bottom" data-modal-open>${book.title}</h3>`;
    const description = `<p class="book-card__author">${book.author}</p>`;

    return `
      <li id="${book._id}" class="book-card__component book-card__item"> 
        ${image}
        ${title}
        ${description}    
      </li>
    `;
  });

  heading.innerHTML = categoryMarkup;
  container.classList.add('books-container-category');
  container.innerHTML = bookElements.join('');
}

async function getBookById(id) {
  try {
    const { data } = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getBookById, renderBooks };
