const nameCard = document.querySelector("#nameCard");
const nameText = document.querySelector("#name");
const numberCard = document.querySelector("#numberCard")
const numberText = document.querySelector(".card-text")
const mm = document.querySelector("#date1");
const mmText = document.querySelector("#mm");
const yy = document.querySelector("#date2");
const yyText = document.querySelector("#yy");
const cvs = document.querySelector("#cvc");
const cvsNumber = document.querySelector(".card-back-text");
//mostrar modal
const mostrar = document.querySelector(".modal-container");
const boton = document.querySelector(".click");
//ocultar
const visible = document.querySelector(".modal");

nameCard.addEventListener('input', (e)=>{
  nameText.innerHTML = `
  <p class="card-text" id="name">${e.target.value}</p>
  `
});

numberCard.addEventListener('input', (e)=>{
  numberText.innerHTML = `
  <p class="card-text">${e.target.value}</p>
  `
});

mm.addEventListener("input", (e)=>{
  mmText.innerHTML = `
  <p class="card-text" id="mm">${e.target.value}/</p>
  `
});

yy.addEventListener('input', (e)=>{
  yyText.innerHTML = `
  <p class="card-text" id="yy">${e.target.value}</p>
  `
});

cvs.addEventListener('input', (e)=>{
cvsNumber.innerHTML = `
<p class="card-back-text">${e.target.value}</p>
`
});

boton.addEventListener('click' , (e)=>{
  mostrar.style.display = "flex";
});

visible.addEventListener('click', (e)=>{
  mostrar.style.display = 'none';
});
