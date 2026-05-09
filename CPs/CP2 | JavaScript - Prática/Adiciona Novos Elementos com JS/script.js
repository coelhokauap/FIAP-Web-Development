// Adiciona Bolinhas
const btn_bolinhas = document.getElementById("add_bolinhas");
let total = 0; // Contador de Bolinhas
let bolinhas = ""; // Conteúdo das Bolinhas
let bola = '<div class="bolinha"></div>'; // Conteúdo Para Adicionar

// Ação de Clique
btn_bolinhas.addEventListener("click", () => {
  total = total + 1;
  bolinhas = "";
  for (let index = 0; index < total; index++) {
    bolinhas = bolinhas + bola;
  }

  document.getElementById("agrupar_bolinhas").innerHTML = bolinhas;
});
