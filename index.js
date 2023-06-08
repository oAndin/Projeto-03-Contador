console.log("Hello World!");

// Precisamos "Puxar" os botôes e guardados dentro de variaveis para que possamos manipula-los 

const evAumentar = document.querySelector(".mais");
const evDiminuir = document.querySelector(".menos");
const evResetar = document.querySelector(".resetar");
const botoes = document.querySelector(".botoes")
let contador = document.querySelector(".contador");


let evContagem = 0;

//  Iremos adicionar o gatilho para a funcionalidade, que será o Click;

evAumentar.addEventListener("click", function adicionar() {
    evContagem++;
    contador.innerHTML = evContagem;
    if (evContagem > 0) {
        contador.style.color = "green";
    }
    if (evContagem == 0) {
        contador.style.color = "black";
    }
});
evDiminuir.addEventListener("click", function diminuir(){
    evContagem--;
    contador.innerHTML = evContagem;
    if (evContagem < 0) {
        contador.style.color = "red";
    }
    if (evContagem == 0) {
        contador.style.color = "black";
    }
});

evResetar.addEventListener("click", function resetar(){
    evContagem = 0;
    contador.innerHTML = evContagem;
    contador.style.color = "black";
});

// evDiminuir.addEventListener("click", subtrair);
// evReset.addEventListener("click", resetar);

// Por ultimo criar os funções

// function adicionar(){
//     contagemEv++
//     contador.innerHTML = contagemEv;
//     if (contagem > 0) {
//         contagemEv.style.color = "green";
//     }
//     if(contagem == 0){
//         contagemEv.style.color = "black";
//     }
// }
console.log(evContagem)