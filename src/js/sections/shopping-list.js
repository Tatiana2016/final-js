import svgLinkDelIcon from '/src/images/symbol-defs.svg';
import pngLinkAmazonIcon from '/src/images/amazonIcon.png';
import pngLinkAmazonIcon2x from '/src/images/amazonIcon@2x.png';
import pngLinkbookIcon from '/src/images/bookIcon.png';
import pngLinkbookIcon2x from '/src/images/bookIcon@2x.png';
import pngLinkbooksIcon from '/src/images/booksIcon.png';
import pngLinkbooksIcon2x from '/src/images/booksIcon@2x.png';

import amazon1x from '/src/images/modal_img/icons-for-light-theme/amazonLight.png';
import amazon2x from '/src/images/modal_img/icons-for-light-theme/amazonLight@2x.png';
import book1x from '/src/images/modal_img/icons-for-light-theme/bookShop.png';
import book2x from '/src/images/modal_img/icons-for-light-theme/bookShop@2x.png';
import apple1x from '/src/images/modal_img/icons-for-light-theme/appleBooks.png';
import apple2x from '/src/images/modal_img/icons-for-light-theme/appleBooks@2x.png';

const listShoppingCards = document.querySelector('.js-listCards');
const paginationStart = document.querySelector('.js-paginationToStart');
const paginationPrevEl = document.querySelector('.js-paginationPrevEl');
const paginationOne = document.querySelector('.js-paginationOne');
const paginationTwo = document.querySelector('.js-paginationTwo');
const paginationThree = document.querySelector('.js-paginationThree');
const paginationPoint = document.querySelector('.js-paginationPoint');
const pagination = document.querySelector('.js-paginationNextEl');
const paginationToEnd = document.querySelector('.js-paginationToEnd');
const paginationCont = document.querySelector('.card-shopping__btnContainer');
const emptyListContainer = document.querySelector('.shopping-list__emptyListContainer');
const btnDelCard = document.querySelector('.js-listCards');


const STORAGE_KEY = 'storage-data-shop';
let listObg = [];
let pagePagination = 1;
// localStorage.clear();


if (listShoppingCards) {
  loadLocalStorage();
  listObg.length<3?paginationCont.style.display = 'none':null;
}

if (listObg.length > 0 && listShoppingCards) {
  if (listObg.length <= 3) {
    paginationCont.style.display = 'none';
  } else {
    pagination.addEventListener('click', onPaginationNextEl);
    paginationStart.addEventListener('click', onPaginationFirstEl);
    paginationPrevEl.addEventListener('click', onPaginationPrevEl);
    paginationOne.addEventListener('click', onPaginationElements);
    paginationTwo.addEventListener('click', onPaginationElements);
    paginationThree.addEventListener('click', onPaginationElements);
    paginationToEnd.addEventListener('click', onPaginationElements);
    paginationPoint.addEventListener('click', onPaginationPoint);
  }

  if (listShoppingCards) {
    listShoppingCards.insertAdjacentHTML(
      'beforeend',
      createMarkup(listObg.slice(0, 3))
    );
    emptyListContainer.style.display = 'none';
  }

  btnDelCard.addEventListener('click', delCardShoppingList);
}

function loadLocalStorage() {
  try {
    listObg = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        book_image,
        title,
        description,
        author,
        list_name,
        id,
        shopAmazon,
        shopAppleBooks,
        shopBookshop,
      }) => {
        return `<li class="js-Card card-shopping">
            <div class="card-shopping__container"> 
                <img src="${book_image}" alt="${title}" class="card-shopping__img">
                <div class="card-shopping__itemContainer">         
                        <h2 class="card-shopping__head">${title}</h2>
                        <h3 class="card-shopping__categoryBook">${list_name}</h3>
                        <div class="card-shopping__delCard js-delCard" data-id=${id}>
                            <svg width="17" height="17" class="card-shopping__delCardIcon js-delCard" data-id=${id}>
                                <use href="${svgLinkDelIcon}#delIcon" class="js-delCard" data-id=${id}> </use>
                            </svg>
                        </div>
                        <p class="card-shopping__shortDescription">${description}</p>
       
                    <div class="card-shopping__author-links-container">
                        <p class="card-shopping__author">${author}</p>
                        <ul class="card-shopping__listLinks">
                            <li class="card-shopping__listItem">
                                <a rel="nofollow" target="_blank" href="${shopAmazon}" class="card-shopping__listIconLinks">
                                    <picture>
                                    <source
                                        srcset="
                                            ${amazon1x} 1x, 
                                            ${amazon2x} 2x
                                        "
                                        type="image/png"
                                        width="48" 
                                        height="15" 
                                    >
                                    <img
                                        src=${amazon1x}

                                        alt="amazon"
                                        class="card-shopping__picture card-shopping__picture-amazon"
                                    >
                                    </picture>    
                                </a>
                            </li>
                            <li class="card-shopping__listItem">
                                <a rel="nofollow" target="_blank" href="${shopAppleBooks}" class="card-shopping__listLinks">
                                    <picture>
                                        <source
                                            srcset="
                                                ${apple1x} 1x, 
                                                ${apple2x} 2x
                                            "
                                            type="image/png"
                                            width="28" 
                                            height="27" 
                                        >
                                        <img
                                            src=${apple1x}

                                            alt="book"
                                            class="card-shopping__picture"
                                        >
                                    </picture>    
                                </a>
                            </li>
                            <li class="card-shopping__listItem">
                                <a rel="nofollow" target="_blank" href="${shopBookshop}" class="card-shopping__listLinks">
                                <picture>
                                <source
                                    srcset="
                                        ${book1x} 1x, 
                                        ${book2x} 2x
                                    "
                                    type="image/png"
                                    width="28" 
                                    height="27" 
                                >
                                <img
                                    src=${book1x}

                                    alt="book"
                                    class="card-shopping__picture"
                                >
                            </picture> 
                                </a>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </li>`;
      }
    )
    .join('');
}

function onPaginationNextEl(evt) {
  if (evt.target.classList.contains('pgnEl')) {
    if (
      listObg.length <= (pagePagination - 1) * 3 ||
      listObg.length === pagePagination * 3
    ) {
      pagination.disabled = true;
    }
    pagePagination += 1;
    listShoppingCards.innerHTML = '';

    listShoppingCards.insertAdjacentHTML(
      'beforeend',
      createMarkup(listObg.slice((pagePagination - 1) * 3, pagePagination * 3))
    );
  }
}

function onPaginationFirstEl() {
  pagePagination = 1;
  listShoppingCards.innerHTML = '';
  listShoppingCards.insertAdjacentHTML(
    'beforeend',
    createMarkup(listObg.slice(0, 3))
  );
}

function onPaginationPrevEl(evt) {
  if (evt.target.classList.contains('pgnEl')) {
    if (pagePagination > 1) {
      pagePagination -= 1;
      listShoppingCards.innerHTML = '';
      listShoppingCards.insertAdjacentHTML(
        'beforeend',
        createMarkup(
          listObg.slice((pagePagination - 1) * 3, pagePagination * 3)
        )
      );
    }
  }
}

function onPaginationElements(evt) {
  if (evt.currentTarget.classList.contains('js-paginationToEnd')) {
    pagePagination = Math.ceil(listObg.length / 3);
    listShoppingCards.innerHTML = '';
    listShoppingCards.insertAdjacentHTML(
      'beforeend',
      createMarkup(listObg.slice((pagePagination - 1) * 3, pagePagination * 3))
    );
  }
  if (evt.target.classList.contains('js-paginationOne')) {
    onPaginationFirstEl();
  }
  if (listObg.length > 3 && Number(evt.currentTarget.textContent) > 1) {
    pagePagination = Number(evt.currentTarget.textContent);
    listShoppingCards.innerHTML = '';
    listShoppingCards.insertAdjacentHTML(
      'beforeend',
      createMarkup(listObg.slice((pagePagination - 1) * 3, pagePagination * 3))
    );
  }
}

function onPaginationPoint(evt) {
  if (evt.target.classList.contains('pgnEl')) {
    if (
      listObg.length > 9 &&
      (Number(paginationOne.textContent) + 3) * 3 < listObg.length
    ) {
      paginationOne.textContent = Number(paginationOne.textContent) + 3;
      paginationTwo.textContent = Number(paginationTwo.textContent) + 3;
      paginationThree.textContent = Number(paginationThree.textContent) + 3;
    }
  }
}

function delCardShoppingList(evt) {
  if (evt.target.classList.contains('js-delCard') && listObg.length > 0) {
    const idToDelete = evt.target.dataset.id;
    listObg = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const indexToDelete = listObg.findIndex(obj => obj.id === idToDelete);
    listObg.splice(indexToDelete, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listObg));

    pagePagination = Math.ceil(listObg.length / 3);
    listShoppingCards.innerHTML = '';
    listShoppingCards.insertAdjacentHTML(
      'beforeend',
      createMarkup(listObg.slice((pagePagination - 1) * 3, pagePagination * 3))
    );
    if (pagePagination === 1) {
      paginationCont.style.display = 'none';
    }
    if (listObg.length === 0) {
      emptyListContainer.style.display = 'block';
    }
  }
}
