import axios from 'axios';

//Top 5 books
async function getBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/';
  const ENDPOINT = 'books/top-books';

  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINT}`);

    return response;
  } catch (error) {
    throw new Error(Notiflix.Notify.failure('Sorry, no results found'));
  }
}

export { getBooks };
