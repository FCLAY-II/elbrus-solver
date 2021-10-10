const navbar = document.querySelector(".auth");
const registration = document.querySelector('.center');
const allBlock = document;
const login = document.querySelector('.centerlog');
const seven = document.querySelector('#seven');

registration?.addEventListener('click', (event) => {
  if (event.target.innerText === 'Войти') {
    login.style.display = 'block';
    navbar.style.display = 'none';
    registration.style.display = 'none';
    event.preventDefault();
    allBlock?.addEventListener('click', (event) => {
      if (event.target.parentElement.tagName === 'HTML') {
        login.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});

login?.addEventListener('click', (event) => {
  if (event.target.innerText === 'Создайте аккаунт') {
    registration.style.display = 'block';
    navbar.style.display = 'none';
    login.style.display = 'none';
    event.preventDefault();
    allBlock?.addEventListener('click', (event) => {
      if (event.target.parentElement.tagName === 'HTML') {
        registration.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});

navbar?.addEventListener('click', (event) => {
  console.log(event.target.innerText);
  if (event.target.innerText === 'Регистрация') {
    registration.style.display = 'block';
    navbar.style.display = 'none';
    event.preventDefault();
    allBlock?.addEventListener('click', (event) => {
      if (event.target.parentElement.tagName === 'HTML') {
        registration.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
  if (event.target.innerText === 'Авторизация') {
    login.style.display = 'block';
    navbar.style.display = 'none';
    event.preventDefault();
    allBlock?.addEventListener('click', (event) => {
      if (event.target.parentElement.tagName === 'HTML') {
        login.style.display = 'none';
        navbar.style.display = 'block';
      }
    });
  }
});

seven?.addEventListener('click', async (event) => {
  if (event.target.closest('div')) {
    const articleId = event.target.closest('article').id;
    const response = await fetch(`/tasks/${articleId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: articleId }),
    });
    if(response.ok) {
      console.log(7896);
    }
  }
});
