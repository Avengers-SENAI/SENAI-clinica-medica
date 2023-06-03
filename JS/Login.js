function verificarEmail() {
    event.preventDefault();

    var email = document.getElementById("email1").value;
    var dominio = email.split("@")[1].toLowerCase();

    if (dominio === "medico.senai.edu.com") {
        window.location.assign("../HTML/telamedico.html");
    }
    else if (dominio === "adm.senai.edu.com") {
        window.location.href = "../HTML/TELA-ADM.HTML";
    }
    else if (dominio === "paciente.senai.edu.com") {
        window.location.href = "../HTML/tela-do-paciente-com-css.html";
    }
    else {
        mensagemErro.innerText = "Email inválido.";
        mensagemErro.style.display = "block";
    }
}
