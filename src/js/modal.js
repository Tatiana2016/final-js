// const fireBaseBackdrop = document.querySelector('.fire-base-backdrop');


const idModal = document.querySelector('.about-book-modal');
const closeModalBtn = document.querySelector('#modal-close');
const idBackdropModal = document.querySelector('.js-backdrop-modal');

function openModalId() {
  idModal.classList.remove('is-hidden');
  idBackdropModal.classList.remove('is-hidden');
}

function closeModalId() {
  idModal.classList.add('is-hidden');
  idBackdropModal.classList.add('is-hidden');
}

closeModalBtn.addEventListener('click', closeModalId);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalId();
  }
});

idBackdropModal.addEventListener('click', function (event) {
  if (event.target === idBackdropModal) {
    closeModalId();
  }
});



const bookList = document.querySelector('.books-container');
const modals = document.querySelector('#modals');
const storageButton = document.querySelector('.add-storage-button');
const removeStorageBtn = document.querySelector('.remove-modal-btn');
const storageDescription = document.querySelector('.storage-description');
const STORAGE_KEY = 'storage-data-shop';
let storageArr = [];
let storageObj = {};

storageButton.addEventListener('click', onStorageAdd);
removeStorageBtn.addEventListener('click', onStorageDelete);
bookList.addEventListener('click', onIdClick);

function onIdClick(e) {
  const id = e.target.closest('li').id;
  openModalId();
  createModal(id);
console.log(e.target.closest('li'));

}

async function createModal(bookId) {
  try {
    const data = await fetchBookById(bookId);
    storageCheck();
    createMarkup(data);
    return data;
  
  } catch (error) {
    console.error('Error', error);
    throw error;
  
  }
}

async function fetchBookById(bookId) {
  try {
    storageObj = {};
    const response = await fetch(
      `https://books-backend.p.goit.global/books/${bookId}`
    );
    const data = await response.json();
    storageObj = {
      book_image: data.book_image,
      title: data.title,
      author: data.author,
      description: data.description,
      marketAmazon: data.buy_links[0].url,
      marketAppleBooks: data.buy_links[1].url,
      marketBookshop: data.buy_links[4].url,
      list_name: data.list_name,
      id: data._id,
    };
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}
function storageCheck() {
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const idToFind = storageObj.id;

  if (!storageArr || storageArr.length === 0) {
    storageButton.style.display = 'block';
    removeStorageBtn.style.display = 'none';
    return;
  } else {
    const objToFind = storageArr.find(obj => obj.id === idToFind);
    if (!objToFind) {
      storageButton.style.display = 'block';
      removeStorageBtn.style.display = 'none';
    } else {
      storageButton.style.display = 'none';
      removeStorageBtn.style.display = 'block';
    }
  }

}

import apple from "../images/modal-img/book_shop.svg";
import amazon from '../images/modal-img/amazon.svg';
import book from '../images/modal-img/book.svg';

function createMarkup(data) {
  modals.innerHTML = '';
  const bookImage = data.book_image;
  const title = data.title;
  const author = data.author;
  const description = data.description;
  const marketAmazon = data.buy_links[0].url;
  const marketAppleBooks = data.buy_links[1].url;
  const marketBookshop = data.buy_links[4].url;

  const html = `
  
  <img src="${bookImage}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${title}</h2>
  <p class="author-about-book-modal"> ${author}</p>
  <p class="text-about-book-modal">${description || " "}
  <a href="${marketAmazon}" target="_blank"> 
  <img width="38" height="38"
        src ="${amazon}" alt = "Amazon"/>
  </a>
  </li> 
  <li class="shop-modal-item">
  <a href="${marketAppleBooks}" target="_blank">
  <img width="38" height="38"
        src ="${apple}" alt = "Apple"/>
  </a>
  </li>
  <li class="shop-modal-item">
  <a href="${marketBookshop}" target="_blank"> 
  <img width="38" height="38"
        src ="${book}" alt = "Book"/>
  </a>
  </li>
</ul>
</div>
  `;
  modals.innerHTML = html;
}

function onStorageAdd() {
  const realStorageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const dataToSave = storageObj;
  if (!realStorageArr || realStorageArr.length === 0) {
    storageArr.push(dataToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  } else {
    realStorageArr.push(dataToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(realStorageArr));
  }

  storageDescription.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  storageCheck();
}

function onStorageDelete() {
  storageDescription.textContent = '';

  const idToDelete = storageObj.id;
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);
  storageArr.splice(indexToDelete, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  storageCheck();
}
