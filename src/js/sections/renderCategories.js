import { getBooksCategory } from './getBooksCategories';
import { getBooksByCategory } from './getBooksByCategory';
import { renderBooks } from './renderBooks';

const container = document.querySelector('.category-list');
const list = document.createElement('ul');

list.classList.add('menu-category');
list.style.listStyleType = 'none';
container.prepend(list);

renderCategories();

async function renderCategories() {
  try {
    const response = await getBooksCategory();

    if (response && response.data) {
      const categories = response.data;
      const sortedCategories = categories.sort((a, b) => a.list_name.localeCompare(b.list_name));
      const itemsHtml = sortedCategories.map(category => `<li><a href="#" data-category="${category.list_name}" class="menu-item-light">${category.list_name}</a></li>`).join('');

      list.innerHTML = itemsHtml;

      list.addEventListener('click', async (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.tagName === 'A' && target.classList.contains('menu-item-light')) {
          const selectedCategory = target.getAttribute('data-category');
          const currentCategoryTitle = target.innerText;
          const booksResponse = await getBooksByCategory(selectedCategory, currentCategoryTitle);

          if (booksResponse && booksResponse.data) {
            renderBooks(booksResponse.data, currentCategoryTitle);

            const bookButtons = document.querySelectorAll('.book button');
            bookButtons.forEach(button => {
              button.addEventListener('click', async (event) => {
                const bookId = event.currentTarget.getAttribute('data-book-id');
                const bookDetails = await getBookById(bookId);
                renderBookDetails(bookDetails);
              });
            });
          }
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}
