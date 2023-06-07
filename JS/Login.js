function verificarEmail() {
    event.preventDefault();

    var email = document.getElementById("email1").value;
    var senha1 = document.getElementById("senha1").value;
    var dominio = email.split("@")[1].toLowerCase();

    if (dominio === "medico.senai.edu.com" && senha1 === "medico") {
        window.location.assign("../HTML/telamedico.html");
    }
    else if (dominio === "adm.senai.edu.com" && senha1 === "adm") {
        window.location.href = "../HTML/TELA-ADM.HTML";
    }
    else if (dominio === "paciente.senai.edu.com" && senha1 === "paciente") {
        window.location.href = "../HTML/tela-do-paciente-com-css.html";
    }
    else {
        mensagemErro.innerText = "Email ou Senha inválida.";
        mensagemErro.style.display = "block";
    }
}