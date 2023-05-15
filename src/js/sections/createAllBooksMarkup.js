import axios from 'axios';
import { bookContainer } from './createBooksMarkup.js';
import { getAllBooksByCategory } from './getAllBooksByCategory';
import {createAllBooksByCategoryMarkup} from './createAllBooksByCategoryMarkup';
import { getBooks } from './getBooks';

const bookContainer = document.querySelector('.books-container');


// // Event listener to the document
// document.addEventListener('click', async function (event) {
//   let categoryId = document.querySelector('#${_id}')
//   const books = await getAllBooksByCategory(categoryId)
//   const result = books.response.data;
//   if (event.target.classList.contains('.books-category-js')) {
//     event.preventDefault();
    
//    const markup = createAllBooksByCategoryMarkup(result)
//    bookContainer.innerHTML = createAllBooksByCategoryMarkup(markup, category);
//   }
// });

