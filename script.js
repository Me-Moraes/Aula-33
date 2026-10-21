const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");

const listaDeEstudantes = [
  "Beatriz Oliveira",
  "Carlos Eduardo",
  "Daniela Santos",
  "Gabriel Ferreira",
  "Helena Rodrigues",
  "Lucas Vinícius"
];

function adicionarNovoNome() {
  let nome = document.getElementById("campoNovoNome").value.trim();
  if (nome == "") {
    elementoContador.innerText =
      "Erro: não é possível adicionar um nome vazio.";
    elementoContador.style.color = "red";
    console.log("Erro: campo vazio.");
    return;
  }
  for (let i = 0; i < listaDeEstudantes.length; i++) {
    if (listaDeEstudantes[i].toLowerCase() == nome.toLowerCase()) {
      elementoContador.innerText = "Erro: esse nome já está cadastrado.";
      elementoContador.style.color = "red";
      console.log("Nome duplicado: " + nome);
      return;
    }
  }
  listaDeEstudantes.push(nome);
  exibirListaAutomaticamente();
  document.getElementById("campoNovoNome").value = "";
  document.getElementById("campoNovoNome").focus();
  elementoContador.innerText = `Nome "${nome}" adicionado com sucesso! Total: ${listaDeEstudantes.length} estudantes cadastrados.`;
  elementoContador.style.color = "green";
  console.log("Nome adicionado: " + nome);
}
function exibirListaAutomaticamente() {
  elementoLista.innerHTML = "";
  for (let i = 0; i < listaDeEstudantes.length; i++) {
    const itemLi = document.createElement("li");
    itemLi.className = "Item-nome";
    itemLi.innerHTML = `
            <span>${listaDeEstudantes[i]}</span>
            <span class="posicao-tag">#${i + 1}</span> `;
    elementoLista.appendChild(itemLi); }
  elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados.`;
  elementoContador.style.color = "green";
  console.log(
    "Lista exibida com sucesso: " + listaDeEstudantes.length + " nomes.", );
}
function exibirOrdemInvertida() {
  elementoLista.innerHTML = "";
  let contador = listaDeEstudantes.length - 1
  while (contador >= 0) {
    const itemLi = document.createElement("li");
    itemLi.className = "Item-nome"
    itemLi.innerHTML = `
            <span>${listaDeEstudantes[contador]}</span>
            <span class="posicao-tag">#${contador + 1}</span> `;
    elementoLista.appendChild(itemLi);
    contador--;
  }
  elementoContador.innerText = `Nomes exibidos em ordem inversa: ${listaDeEstudantes.length} estudantes.`;
  elementoContador.style.color = "green";
  console.log("Lista exibida em ordem inversa.");
}
function limparLista() {
  elementoLista.innerHTML = "";
  elementoContador.innerText = "Lista limpa pelo usuário. Nenhum nome na tela.";
  elementoContador.style.color = "red";
  console.log("Tela limpa.");
}

exibirListaAutomaticamente();


