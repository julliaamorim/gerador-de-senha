const URL = "https://www.psswrd.net/api/v1/password/";
const campoSenha = document.getElementById("senha-campo");
const btnCopiar = document.getElementById("copiar-btn");

async function gerarSenha() {
   const respostaDaApi = await fetch(URL);
   const objeto = await respostaDaApi.json();
   campoSenha.value = objeto.password;
}

btnCopiar.addEventListener("click", function () {
    campoSenha.select(); // isso aqui seleciona
    navigator.clipboard.writeText(campoSenha.value); // isso aqui copia
    btnCopiar.textContent = "Copiado!";
    setTimeout(() => {
        btnCopiar.textContent = "Copiar";
    }, 2000); // isso aqui é 2 segundos
});

gerarSenha();

