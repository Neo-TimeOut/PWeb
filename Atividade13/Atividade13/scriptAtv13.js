const button = document.getElementById("janela");

janela.addEventListener("click", quebrar);
janela.addEventListener("mouseover", abrir);
janela.addEventListener("mouseout", fechar);

function quebrar(event){
    event.target.style.backgroundColor = "grey";
    event.target.textContent = "Janela Quebrada";
}

function abrir(event){
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Janela Aberta";
}

function fechar(event){
    event.target.style.backgroundColor = "brown";
    event.target.textContent = "Janela Fechada";
}