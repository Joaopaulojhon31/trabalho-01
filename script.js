function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Bem-vindo à minha página pessoal! Nunca pare de evoluir.";
    mensagem.classList.add("mensagem-visivel");

    setTimeout(() => {
        setTimeout(() => {
            mensagem.classList.remove("mensagem-visivel");
            mensagem.textContent = "";
        }, 700);
    }, 6000);
}