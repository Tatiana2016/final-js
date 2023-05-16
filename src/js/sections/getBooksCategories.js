import axios from 'axios';

//Get All Categories
async function getBooksCategory() {
  const BASE_URL = 'https://books-backend.p.goit.global/';
  const ENDPOINT = 'books/category-list';

  try {
    const result = await axios.get(`${BASE_URL}${ENDPOINT}`);
    return result;
  } catch (error) {
    throw new Error(Notiflix.Notify.failure('Sorry, no results found'));
  }
}

export { getBooksCategory };
