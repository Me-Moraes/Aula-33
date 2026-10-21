const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");


function adicionarNovoNome(){
    let nome = document.getElementById("campoNovoNome").value.trim();
    else if (nome == "") {
    elementoContador.innerText = "Erro, não é possivel adicionar um novo nome quando o campo está vazio";
    elementoContador.style.color = "red";
   }
   
}
function exibirListaAutomaticamente() {
    elementoLista.innerHTML = " "; 
    for (let i = 0; i < listaDeEstudantes.length; i++) {
        const itemLi = document.createElement("li");
        itemLi.className = "Item-nome";
        itemLi.innerHTML = `<span> ${listaDeEstudantes[i]}</span>
        <span class="posicao-tag">#${i + 1}</span>
        `;
        elementoLista.appendChild(itemLi);
            elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados`;
            elementoContador.style.color = "green";
            console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados`);
    }
}
function limparLista() {
    elementoLista.innerHTML = " ";
    elementoContador.innerText = "Lista limpa pelo usuário. Nunhum nome na tela.";
    elementoContador.style.color = "red";
    console.log("Tela limpa");
}
exibirListaAutomaticamente ();