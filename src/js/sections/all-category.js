import { getBooksCategory } from './getBooksCategories';
import { getBooksByCategory } from './getBooksByCategory';
import { renderBooks } from './renderBooks';

const container = document.querySelector('.category-list');
const list = document.createElement('ul');
const title = document.createElement('h2');

title.textContent = 'All categories';
title.classList.add('menu-item-light');
list.classList.add('menu-category');
list.style.listStyleType = 'none';
container.append(title, list);

renderCategories();

async function renderCategories() {
  const response = await getBooksCategory();
  const categories = response.data;
  const sortedCategories = categories.sort((a, b) => a.list_name.localeCompare(b.list_name));
  const itemsHtml = sortedCategories.map(category => `<li><a href="#" data-category="${category.list_name}" class="menu-item-light">${category.list_name}</a></li>`).join('');

  list.insertAdjacentHTML('beforeend', itemsHtml);

  const categoryLinks = document.querySelectorAll('.category-list a');

  categoryLinks.forEach(link => {
  link.addEventListener('click', async (event) => {
    event.preventDefault();
    const selectedCategory = event.currentTarget.getAttribute('data-category');
    console.log(selectedCategory);
    const booksResponse = await getBooksByCategory(selectedCategory);
    
    renderBooks(booksResponse.data);
  });
 });
}