function renderBooks(books) {
  const container = document.querySelector('.book-list');
  container.innerHTML = '';

  if (books.length === 0) {
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

    container.appendChild(bookContainer);
  });
}
export { renderBooks };