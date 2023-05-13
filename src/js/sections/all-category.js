const categories = [
  {"list_name":"Young Adult Paperback Monthly"},
  {"list_name":"Graphic Books and Manga"},
  {"list_name":"Mass Market Monthly"},
  {"list_name":"Middle Grade Paperback Monthly"},
  {"list_name":"Hardcover Nonfiction"},
  {"list_name":"Childrens Middle Grade Hardcover"},
  {"list_name":"Series Books"},
  {"list_name":"Audio Nonfiction"},
  {"list_name":"Trade Fiction Paperback"},
  {"list_name":"Combined Print and E-Book Nonfiction"},
  {"list_name":"Audio Fiction"},
  {"list_name":"Young Adult Hardcover"},
  {"list_name":"Paperback Nonfiction"},
  {"list_name":"Combined Print and E-Book Fiction"},
  {"list_name":"Business Books"},
  {"list_name":"Picture Books"},
  {"list_name":"Advice How-To and Miscellaneous"},
  {"list_name":"Hardcover Fiction"}
];

const list = document.createElement('ul');
const title = document.createElement('h2');
title.textContent = 'All categories';
list.style.listStyleType = 'none';

list.innerHTML = categories.map(category => `<li>${category.list_name}</li>`).join('');

document.body.append(title, list);