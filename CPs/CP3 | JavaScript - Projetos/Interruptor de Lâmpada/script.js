// Pega o botão de Ligar
const btn_on = document.getElementById("on");

// Pega o botão de Desligar
const btn_off = document.getElementById("off");

// Pega a Lâmpada
const lampada = document.getElementById("lampada");

// Evento de clique (Ligar)
btn_on.addEventListener("click", () => {
  lampada.classList.add("on");
});

// Evento de clique (Desligar)
btn_off.addEventListener("click", () => {
  lampada.classList.remove("on");
});
