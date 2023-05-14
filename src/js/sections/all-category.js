import { getBooksCategory } from './getBooksCategories';

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
  const itemsHtml = sortedCategories.map(category => `<a href=""><li class="menu-item-light">${category.list_name}</li></a>`).join('');
  list.insertAdjacentHTML('beforeend', itemsHtml);
}

renderCategories();