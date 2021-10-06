const navbar = document.querySelector('.container-fluid');
const registration = document.querySelector('.center');
const allBlock = document;
const login = document.querySelector('.centerlog');
const truelogin = document.querySelector('.truelogin');

registration.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.innerText === 'Войти') {
    login.style.display = 'block';
    navbar.style.display = 'none';
    registration.style.display = 'none';
    allBlock.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target.parentElement === null) {
        login.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});

login.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.innerText === 'Создайте аккаунт') {
    registration.style.display = 'block';
    navbar.style.display = 'none';
    login.style.display = 'none'
    allBlock.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target.parentElement === null) {
        registration.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});

navbar.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.innerText === 'Регистрация') {
    registration.style.display = 'block';
    navbar.style.display = 'none';
    allBlock.addEventListener('click', (e) => {
      e.stopPropagation();
      if (e.target.parentElement === null) {
        registration.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
  if (e.target.innerText === 'Авторизация') {
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
