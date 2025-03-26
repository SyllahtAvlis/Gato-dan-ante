document.addEventListener("DOMContentLoaded", function () {
    const imagem = document.getElementById("imagem");
    const botao = document.getElementById("botao");
    const musica = document.getElementById("musica");

    let ativo = false;

    botao.addEventListener("click", function () {
        if (!ativo) {
            imagem.src = "img/dancando.gif"; // Troca para o GIF
            musica.play(); // Toca a música
            botao.textContent = "Desativar";
        } else {
            imagem.src = "img/parado.gif"; // Volta para a imagem estática
            musica.pause(); // Pausa a música
            musica.currentTime = 0; // Reseta o tempo da música
            botao.textContent = "Ativar";
        }
        ativo = !ativo;
    });
});
