import axios from 'axios';

//20 books by Category
async function getAllBooksByCategory(category) {
  const BASE_URL = 'https://books-backend.p.goit.global/';
  const ENDPOINT = 'books/category';
  const BOOK_CATEGORY = category;

  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINT}?category=${BOOK_CATEGORY}`);
    console.log(response.data)

    return response.data;
  } catch (error) {
    throw new Error(Notiflix.Notify.failure('Sorry, no results found'));
  }
}

export { getAllBooksByCategory };
