// Pega o input de Texto
const input = document.getElementById("item_value");

// Pega o botão de Adicionar
const btn_add = document.getElementById("add_value");

// Pega a Lista
const list = document.getElementById("list");

// Evento de clique (Adicionar)
btn_add.addEventListener("click", () => {
  let item = input.value.trim();

  if (item === "") {
    return;
  }

  list.innerHTML += `
    <li class="item">
      <span>${item}</span>
      <button class="delete_item" onclick="this.parentElement.remove()">Excluir</button>
    </li>
  `;

  input.value = "";
});
