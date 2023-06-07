function Ir(){
    window.location.href = "../HTML/TELA-ADM.HTML";
}
var radios = document.querySelectorAll('input[name="opcao"]');
var containerTexto = document.getElementById("containerTexto");

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function () {
        // Remove a caixa de texto e o label anterior, se existirem
        var caixaTextoExistente = document.getElementById("caixaTexto");
        var labelExistente = document.getElementById("label");
        if (caixaTextoExistente) {
            containerTexto.removeChild(caixaTextoExistente);
        }
        if (labelExistente) {
            containerTexto.removeChild(labelExistente);
        }

        // Verifica qual botão de rádio está selecionado
        if (this.value === "medico" && this.checked) {
            // Cria o label
            var label = document.createElement("label");
            label.id = "label";
            label.textContent = "CRM:";

            // Cria a caixa de texto
            var caixaTexto = document.createElement("input");
            caixaTexto.type = "text";
            caixaTexto.id = "caixaTexto";

            // Adiciona o label e a caixa de texto ao containerTexto
            containerTexto.appendChild(label);
            containerTexto.appendChild(caixaTexto);
        } else if (this.value === "adm" && this.checked) {
            // Cria o label
            var label = document.createElement("label");
            label.id = "label";
            label.textContent = "Matricula:";

            // Cria a caixa de texto
            var caixaTexto = document.createElement("input");
            caixaTexto.type = "text";
            caixaTexto.id = "caixaTexto";

            // Adiciona o label e a caixa de texto ao containerTexto
            containerTexto.appendChild(label);
            containerTexto.appendChild(caixaTexto);
        } else if (this.value === "paciente" && this.checked) {
            // Cria o label
            var label = document.createElement("label");
            label.id = "label";
            label.textContent = "Convenio:";

            // Cria a caixa de texto
            var caixaTexto = document.createElement("input");
            caixaTexto.type = "text";
            caixaTexto.id = "caixaTexto";

            // Adiciona o label e a caixa de texto ao containerTexto
            containerTexto.appendChild(label);
            containerTexto.appendChild(caixaTexto);
        }
    });
}
