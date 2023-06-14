function verificarEmail(){
    window.location.assign("../HTML/TELA-ADM.HTML")

}

function adicionarItem(){
    var item = prompt("Qual objeto você deseja incluir na lista?", "Adicione um novo objeto");
    if (item == null || item == "") {
        alert("O uso do prompt foi cancelado!");
    } else {
        var itens = document.getElementById("itens");
        var option = document.createElement("option");
        option.text = item;
        itens.add(option, itens[0]);
    }
}

// Obtém o botão e a caixa de texto pelo ID
var botao = document.getElementById("meuBotao");
var caixaTexto = document.getElementById("caixaTexto");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", function() {
  // Define a mensagem que deseja exibir
  var mensagem = "Olá, Mundo!";

  // Define o valor da caixa de texto como a mensagem
  caixaTexto.value = mensagem;
});
