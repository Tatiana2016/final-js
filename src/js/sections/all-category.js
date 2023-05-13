import { getBooksCategory } from './getBooksCategories';

const container = document.querySelector('.category-list');
const list = document.createElement('ul');
const title = document.createElement('h2');

title.textContent = 'All categories';
list.style.listStyleType = 'none';
container.append(title, list);

async function renderCategories() {
  const response = await getBooksCategory();
  const categories = response.data;
  const itemsHtml = categories.map(category => `<li>${category.list_name}</li>`).join('');
  list.insertAdjacentHTML('beforeend', itemsHtml);
}

renderCategories();