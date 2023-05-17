// let changeThemeButtons = document.querySelectorAll('input.switch__input'); // Помещаем кнопки смены темы в переменную

// changeThemeButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     // К каждой добавляем обработчик событий на клик
//     let theme = this.dataset.theme; // Помещаем в переменную название темы из атрибута data-theme
//     applyTheme(theme); // Вызываем функцию, которая меняет тему и передаем в нее её название
//   });
// });

// function applyTheme(themeName) {
//   document
//     .querySelector('[title="theme"]')
//     .setAttribute('href', `css/theme-${themeName}.css`); // Помещаем путь к файлу темы в пустой link в head
//   changeThemeButtons.forEach(button => {
//     button.style.display = 'block'; // Показываем все кнопки смены темы
//   });
//   document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none'; // Но скрываем кнопку для активной темы
// }

const body = document.querySelector('body');
const changeThemeButton = document.querySelector('.switch__input');

changeThemeButton.addEventListener('change', changeTheme);

function changeTheme(e) {
  let theme = null;
  if (changeThemeButton.checked) {
    console.log('Checkbox is checked..');
    theme = 'dark';
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    console.log('Checkbox is not checked..');
    theme = 'light';
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
  localStorage.setItem('theme', theme);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.
console.log(activeTheme);
if (activeTheme === null || activeTheme === 'light') {
  changeThemeButton.removeAttribute('checked');
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
} else if (activeTheme === 'dark') {
  changeThemeButton.setAttribute('checked', 'checked');
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
}
