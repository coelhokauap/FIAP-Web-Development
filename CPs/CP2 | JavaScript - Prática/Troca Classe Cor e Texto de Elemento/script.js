// Instância o Objeto Botão
const btn_troca_cor = document.getElementById("troca_cor");
let caixa_texto = document.getElementById("caixa");

// Evento de Clique
btn_troca_cor.addEventListener("click", () => {
  // Captura o Nome do Conteúdo
  let caixa_texto = document.getElementById("caixa");

  // Condicionais de Nome da Cor
  if (caixa_texto.className === "coral") {
    caixa_texto.classList.add("roxo");
    caixa_texto.classList.remove("coral");
  } else {
    caixa_texto.classList.add("coral");
    caixa_texto.classList.remove("roxo");
  }

  // Exibe no Console
  console.log(caixa_texto.className);
});

// Troca Texto
const btn_troca_texto = document.getElementById("troca_texto");
btn_troca_texto.addEventListener("click", () => {
  if (caixa_texto.innerHTML === "Cenoura") {
    document.getElementById("caixa").innerHTML = "Uva";
  } else {
    document.getElementById("caixa").innerHTML = "Cenoura";
  }
});
