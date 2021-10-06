const navbar = document.querySelector('.container-fluid');
const registration = document.querySelector('.center');
const allBlock = document

navbar.addEventListener('click',(e)=>{
  e.preventDefault()
if(e.target.innerText==="Регистрация"){
  registration.style.display = 'block'
  navbar.style.display = 'none'
  allBlock.addEventListener('click',(e)=>{
  e.stopPropagation()
  if(e.target.parentElement=== null){
  registration.style.display = 'none';
  navbar.style.display = 'block';
  }
})
}
if(e.target.innerText === "Авторизация") {
  registration.style.display = 'block';
  navbar.style.display = 'none';
}
})
