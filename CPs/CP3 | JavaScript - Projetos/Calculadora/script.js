// Pega o Input/Display
const display = document.getElementById("display");

// Pega Todos os Botões
const buttons = document.querySelectorAll("button");

// Evento de Clique (Sistema de Calculadora)
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const valor = button.innerText;

    if (valor === "C") {
      display.value = "";
    } else if (valor === "⌫") {
      display.value = display.value.slice(0, -1);
    } else if (valor === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erro Amigável :p";
      }
    } else {
      display.value += valor;
    }
  });
});
