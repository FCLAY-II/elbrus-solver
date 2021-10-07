const navbar = document.querySelector('.container-fluid');
const registration = document.querySelector('.center');
const allBlock = document;
const login = document.querySelector('.centerlog');


registration.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.innerText === 'Войти') {
    login.style.display = 'block';
    navbar.style.display = 'none';
    registration.style.display = 'none';
    allBlock.addEventListener('click', (event) => {
      event.stopPropagation();
      if (event.target.parentElement === null) {
        login.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});

login.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.innerText === 'Создайте аккаунт') {
    registration.style.display = 'block';
    navbar.style.display = 'none';
    login.style.display = 'none';
    allBlock.addEventListener('click', (event) => {
      event.stopPropagation();
      if (event.target.parentElement === null) {
        registration.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});

navbar.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.innerText === 'Регистрация') {
    registration.style.display = 'block';
    navbar.style.display = 'none';
    allBlock.addEventListener('click', (event) => {
      event.stopPropagation();
      if (event.target.parentElement === null) {
        registration.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
  if (event.target.innerText === 'Авторизация') {
    login.style.display = 'block';
    navbar.style.display = 'none';
    allBlock.addEventListener('click', (event) => {
      event.stopPropagation();
      if (event.target.parentElement === null) {
        login.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});
