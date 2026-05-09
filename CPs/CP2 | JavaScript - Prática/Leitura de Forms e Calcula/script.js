// Soma Dos Valores
const btn_soma = document.getElementById("somar");
btn_soma.addEventListener("click", () => {
  let numero_1 = document.getElementById("numero_1").value;
  let numero_2 = document.getElementById("numero_2").value;
  let soma = parseInt(numero_1) + parseInt(numero_2);
  console.log(soma);
});
