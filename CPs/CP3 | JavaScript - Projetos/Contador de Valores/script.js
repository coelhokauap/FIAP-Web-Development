// Pega o botão de Adicionar
const btn_add = document.getElementById("add_value");

// Pega o botão de Remover
const btn_remove = document.getElementById("remove_value");

// Pega o contador
let contador = document.getElementById("contador");

// Valor numérico do contador
let valorContador = 0;

// Evento de clique (Adicionar)
btn_add.addEventListener("click", () => {
  valorContador++;
  contador.innerText = valorContador;
});

// Evento de clique (Remover)
btn_remove.addEventListener("click", () => {
    // Apenas Subtrai se valorContador > 0
  if (valorContador > 0) {
    valorContador--;
    contador.innerText = valorContador;
  }
});
