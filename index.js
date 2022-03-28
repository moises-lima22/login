function validaCampo(idInput, idLabel, qtdCaracter) {
  let campoLabel = idLabel.title;
  let msg = `${campoLabel} *deve conter no mínimo ${qtdCaracter} letras*`;
  let status = false;

  if (idInput.value.length > qtdCaracter) {
    status = true;
    formatacao(idInput, idLabel, status);
  } else {
    formatacao(idInput, idLabel, status, msg);
  }
}

function validaSenha(idInput, idLabel, qtdCaracter) {
  let senha = idInput.value;
  let letrasMaiusculas = /[A-Z]/;
  let letrasMinusculas = /[a-z]/;
  let numeros = /[0-9]/;
  let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  let campoLabel = idLabel.title;
  let status = false;
  let msg = `Senha deve ter pelo menos ${qtdCaracter} caracteres e conter pelo menos: uma letra maiúscula, uma letra minúscula e um número.`;

  if (
    letrasMaiusculas.test(senha) &&
    letrasMinusculas.test(senha) &&
    numeros.test(senha) &&
    caracteresEspeciais.test(senha) == false &&
    senha.length >= qtdCaracter
  ) {
    status = true;
    formatacao(idInput, idLabel, status);
    idLabel.setAttribute(
      "style",
      "margin-top: -20px; color: green; font-size:16px"
    );
  } else {
    formatacao(idInput, idLabel, status, msg);
    idLabel.setAttribute(
      "style",
      "margin-top: -20px; color: red; font-size:16px"
    );
  }
}

function comparaSenha(idInput1, idInput2, idLabel) {
  let senha1 = idInput1.value;
  let senha2 = idInput2.value;
  let status = false;
  let msg = "Confirmar Senha *Senhas não conferem*";

  if (senha1 == senha2) {
    status = true;
    formatacao(idInput2, idLabel, status);
  } else {
    formatacao(idInput2, idLabel, status, msg);
  }
}

function cadastrar() {}

function showPassword(id) {
  if (id.getAttribute("type") == "password") {
    id.setAttribute("type", "text");
  } else {
    id.setAttribute("type", "password");
  }
}

function formatacao(idInput, idLabel, validacao, texto) {
  if (validacao) {
    idInput.setAttribute("style", "color: green");
    idInput.setAttribute("style", "border-color: green");
    idLabel.setAttribute("style", "color: green");
  } else {
    idInput.setAttribute("style", "color: red");
    idInput.setAttribute("style", "border-color: red");
    idLabel.setAttribute("style", "color: red");
    idLabel.innerHTML = texto;
  }
}
