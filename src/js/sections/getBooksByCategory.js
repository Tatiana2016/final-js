import axios from 'axios';
import Notiflix from 'notiflix';
import { renderBooks } from './renderBooks';

Notiflix.Notify.init();

async function getBooksByCategory(category, currentCategoryTitle) {
  const BASE_URL = `https://books-backend.p.goit.global/`;
  const ENDPOINT = `books/category?category=${encodeURIComponent(category)}`;

  try {
    const result = await axios.get(`${BASE_URL}${ENDPOINT}`);
    const books = result.data;
    renderBooks(books, currentCategoryTitle); // передайте currentCategoryTitle до функції renderBooks
    Notiflix.Notify.success('Books loaded successfully');
  } catch (error) {
    Notiflix.Notify.failure('Sorry, no results found');
    throw new Error(error);
  }
}

export { getBooksByCategory };
