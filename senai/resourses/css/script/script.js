// let h1 = document.querySelector("h1");

// // h1.style.color = "blue";
// // h1.style.backgroundColor = "green";
// // h1.style.height = "50px";
// // h1.style.width = "50px";
// //aqui add
// let body = document.querySelector("body")

// // body.style.backgroundColor = 'black';
// // h1.style.color = "turquoise";
// //aqui remove
// body.classList.add("dark");

// let verificarClasse = body.classList.contains("dark");
// if(verificarClasse){
//     // body.classList.remove("dark");
//     //aqui está trocando o tema
//     body.classList.replace("dark","blueTheme");
// }

// let button = document.querySelector("button");
// let opcoes = document.querySelector("#lista");
// let input = document.querySelector("input");
//eventos em javascript
//evento do click 
//quando clica
// button,addEventListener("click",mensage);
//quando clica com o mouse
// button,addEventListener("mousedown",mensage);
//quando passa por cima
// button,addEventListener("mouseenter",mensage);
//quando sair
// button,addEventListener("mouseout",mensage);

//evento change
// opcoes.addEventListener("change",()=>{
//     console.log(opcoes.value)
// })
//evento focus

// function mensage(){
//     console.log("Olá mundo");
// }
// function elementoFocado(){
//     console.log("teste");
// }

let button = document.querySelector("button");
button,addEventListener("click",mensage);
function mensage(){
alert("Você clicou no botão");
}