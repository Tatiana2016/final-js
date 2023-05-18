import apple1x from '../images/modal_img/icons-for-light-theme/appleBooks.png';
import apple2x from '../images/modal_img/icons-for-light-theme/appleBooks@2x.png';
import amazon1x from '../images/modal_img/icons-for-light-theme/amazonLight.png';
import amazon2x from '../images/modal_img/icons-for-light-theme/amazonLight@2x.png';
import book1x from '../images/modal_img/icons-for-light-theme/bookShop.png';
import book2x from '../images/modal_img/icons-for-light-theme/bookShop@2x.png';

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

bookList.addEventListener('click', onClick);
storageButton.addEventListener('click', onStorageAdd);
removeStorageBtn.addEventListener('click', onStorageDelete);

function onClick(e) {
  e.preventDefault();
  if (
    e.target.nodeName !== 'IMG' &&
    e.target.nodeName !== 'H3' &&
    e.target.nodeName !== 'P'
  ) {
    return;
  }
  openModalId();
  addModal(e.target.closest('li').id);
  // console.log((e.target.nodeName.nodeName !== 'H3'));
  // console.log(e.target.parentNode.parentNode.id);
  // console.log(e.target.closest('li').id);
}

async function addModal(bookId) {
  try {
    const data = await fetchBookById(bookId);
    storageCheck();
    addMarkup(data);
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
      shopAmazon: data.buy_links[0].url,
      shopAppleBooks: data.buy_links[1].url,
      shopBookshop: data.buy_links[4].url,
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

function addMarkup(data) {
  modals.innerHTML = '';
  const bookImage = data.book_image;
  const title = data.title;
  const author = data.author;
  const description = data.description;
  const shopAmazon = data.buy_links[0].url;
  const shopAppleBooks = data.buy_links[1].url;
  const shopBookshop = data.buy_links[4].url;

  const html = `
  <div class = "modal-card-wr">
  <img src="${bookImage}" alt="Book Image" class="image-modal">
  
  <div class="info-modal">
  <div class = "cont-title">
  <h2 class="title-book-modal">${title}</h2></div>
  <p class="author-book-modal"> ${author}</p>
  <p class="txt-book-modal">${description || ''}
  

  <ul class = "modal-shopping-list">

  <li class="modal-shopping-list-amazon">
  <a href="${shopAmazon}" target="_blank"> 
  <img width="62" height="19" class="modal-icon-amazon"
        src ="${amazon1x},${amazon2x}" alt = "Amazon"/>
  </a>
  </li> 

  <li class="modal-shopping-list-apple">
  <a href="${shopAppleBooks}" target="_blank">
  <img width="38" height="38"
        src ="${apple1x},${apple2x} " alt = "Apple"/>
  </a>
  </li>

  <li class="modal-shopping-list-book">
  <a href="${shopBookshop}" target="_blank"> 
  <img width="38" height="38"
        src ="${book1x},${book2x}" alt = "Book"/>
  </a>
  </li>

</ul>
</div>
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
