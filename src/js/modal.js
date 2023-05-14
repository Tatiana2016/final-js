// async function getBookInfo(id) {
//   const response = await fetch(`https://books-backend.p.goit.global/books/${id}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch book info');
//   }
//   const bookData = await response.json();
//   return bookData;
// }

// const refs = {
//         openModalBtn: document.querySelector("[data-modal-open]"),
//         closeModalBtn: document.querySelector("[data-modal-close]"),
//         modal: document.querySelector("[data-modal]"),
//     };
//     refs.openModalBtn.addEventListener("click", function(e){
//         e.preventDefault()
//         refs.modal.classList.add("active");
//     });
// refs.closeModalBtn.addEventListener("click", () => {
//     refs.modal.classList.remove("active");
// });


async function getBookInfo(id) {
const response = await fetch(`https://books-backend.p.goit.global/books/${id}`);
if (!response.ok) {
throw new Error('Failed to fetch book info');
}
const bookData = await response.json();
return bookData;
}

const refs = {
openModalBtn: document.querySelector("[data-modal-open]"),
closeModalBtn: document.querySelector("[data-modal-close]"),
modal: document.querySelector("[data-modal]"),
bookContainer: document.querySelector(".book-container"),
congratulationsText: document.querySelector(".congratulations-text")
};

refs.openModalBtn.addEventListener("click", async function(e){
e.preventDefault();
const bookId = '642fd89ac8cf5ee957f122df';
try {
const bookInfo = await getBookInfo(bookId);
        
refs.bookContainer.innerHTML = '';
console.log(bookInfo);
const title = document.createElement("h3");
title.textContent = bookInfo.title;
refs.bookContainer.appendChild(title);

const authors = document.createElement("p");
authors.textContent = `Authors: ${bookInfo.authors.join(', ')}`;
refs.bookContainer.appendChild(authors);

const description = document.createElement("p");
description.textContent = bookInfo.description;
refs.bookContainer.appendChild(description);

const imageLink = document.createElement("a");
imageLink.href = bookInfo.imageLink;
imageLink.target = "_blank";
const image = document.createElement("img");
image.src = bookInfo.image;
image.alt = bookInfo.title;
imageLink.appendChild(image);
refs.bookContainer.appendChild(imageLink);

refs.congratulationsText.textContent = "Book has been added to your shopping list!";

        refs.modal.classList.add("active");
} catch (error) {
console.log(error);
refs.bookContainer.innerHTML = 'Error fetching book information';
}
});

refs.closeModalBtn.addEventListener("click", () => {
refs.modal.classList.remove("active");
});
