const list = document.createElement('ul');
const title = document.createElement('h2');
title.textContent = 'All categories';
list.style.listStyleType = 'none';

document.body.append(title, list);

async function getBooksCategory() {
  const BASE_URL = 'https://books-backend.p.goit.global/';
  const ENDPOINT = 'books/category-list';

  try {
    const result = await axios.get(`${BASE_URL}${ENDPOINT}`);
    console.log(result.data);

    list.innerHTML = result.data.map(category => `<li>${category.list_name}</li>`).join('');

  } catch (error) {
    console.log(error);
  }
}

getBooksCategory();