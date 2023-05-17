const body = document.querySelector('body');
const changeThemeButton = document.querySelector('.switch__input');

changeThemeButton.addEventListener('change', changeTheme);

function changeTheme(e) {
  let theme = null;
  if (changeThemeButton.checked) {
    theme = 'dark';
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    theme = 'light';
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
  localStorage.setItem('theme', theme);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.
if (activeTheme === null || activeTheme === 'light') {
  changeThemeButton.removeAttribute('checked');
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
} else if (activeTheme === 'dark') {
  changeThemeButton.setAttribute('checked', 'checked');
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
}
