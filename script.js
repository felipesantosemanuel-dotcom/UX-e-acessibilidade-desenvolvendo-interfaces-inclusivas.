let bntAjuda = document.querySelector(".botao-ajuda")
let bnFecha = document.querySelector(".botao-fechar")
let modal = document.querySelector(".modal-fundo")

bntAjuda.addEventListener("click", abreModal)
bnFecha.addEventListener("click", fecharModal)

function abreModal() {
modal.style.display = "block"  
}

function fechaModal() {
modal.style.display = "block"  
}