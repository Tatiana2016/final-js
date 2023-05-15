import axios from 'axios';

function renderBooks(books) {
  const container = document.querySelector('.books-container');
  container.innerHTML = '';

  if (!Array.isArray(books) || books.length === 0) {
    container.innerHTML = '<p>No books found</p>';
    return;
  }

  books.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    
    const image = document.createElement('img');
    image.src = book.image_url;
    image.alt = book.title;
    bookContainer.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = book.title;
    bookContainer.appendChild(title);

    const description = document.createElement('p');
    description.textContent = book.description;
    bookContainer.appendChild(description);

    const button = document.createElement('button');
    button.textContent = 'View Details';
    button.setAttribute('data-book-id', book.id); // додайте атрибут з id книги
    bookContainer.appendChild(button);

    container.appendChild(bookContainer);
  });
}
async function getBookById(id) {
  try {
    const { data } = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
export { getBookById,renderBooks };