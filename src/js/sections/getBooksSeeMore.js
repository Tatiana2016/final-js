import axios from 'axios';
import Notiflix from 'notiflix';
import { renderSeeMoreBooks } from './renderSeeMoreBooks';

Notiflix.Notify.init();

async function getBooksSeeMore(category, currentCategoryTitle) {
  const BASE_URL = `https://books-backend.p.goit.global/`;
  const ENDPOINT = `books/category?category=${encodeURIComponent(category)}`;

  try {
    const response = await axios.get(`${BASE_URL}${ENDPOINT}`);
    const books = response.data;
    renderSeeMoreBooks(books, currentCategoryTitle);
    Notiflix.Notify.success('Books loaded successfully');
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Sorry, no results found');
    throw error;
  }
}

export { getBooksSeeMore };
