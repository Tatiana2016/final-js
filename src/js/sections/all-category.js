import { getBooksCategory } from './getBooksCategories';

const container = document.querySelector('.category-list');
const title = document.createElement('h2');
const list = document.createElement('ul');


title.textContent = 'All categories';
title.classList.add('menu-item-light');
list.classList.add('menu-category');

list.style.listStyleType = 'none';
container.append(title, list);

async function renderCategories() {
  const response = await getBooksCategory();
  const categories = response.data;
  
  const sortedCategories = categories.sort((a, b) => a.list_name.localeCompare(b.list_name));
  const itemsHtml = sortedCategories.map(category => `<li class="menu-item-light">${category.list_name}</li>`).join('');

  list.insertAdjacentHTML('beforeend', itemsHtml);
}

renderCategories();