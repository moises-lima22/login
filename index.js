let campoTexto = false;
let campoSenha = false;
let statusSenha = false;

function validaCampoTexto(idInput, idLabel, qtdCaracter) {
  let campoLabel = idLabel.title;
  let textoErro = `${campoLabel} *deve conter no mínimo ${qtdCaracter} letras*`;
  let textoSucesso = `${campoLabel}`;

  if (idInput.value.length >= qtdCaracter) {
    formatacaoSucesso(idInput, idLabel, textoSucesso);
    this.campoTexto = true;
  } else {
    formatacaoErro(idInput, idLabel, textoErro);
    this.campoTexto = false;
  }
  return this.campoTexto;
}

function validaCampoSenha(idInput, idLabel, qtdCaracter) {
  let senha = idInput.value;
  let letrasMaiusculas = /[A-Z]/;
  let letrasMinusculas = /[a-z]/;
  let numeros = /[0-9]/;
  let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
  let textoErro = `Senha deve ter pelo menos ${qtdCaracter} caracteres e conter pelo menos: uma letra maiúscula, uma letra minúscula e um número.`;
  let textoSucesso = "Senha";

  if (
    letrasMaiusculas.test(senha) &&
    letrasMinusculas.test(senha) &&
    numeros.test(senha) &&
    caracteresEspeciais.test(senha) == false &&
    senha.length >= qtdCaracter
  ) {
    formatacaoSucesso(idInput, idLabel, textoSucesso);
    this.campoSenha = true;
  } else {
    formatacaoErro(idInput, idLabel, textoErro);
    this.campoSenha = false;
  }
}

function comparaSenha(idInput1, idInput2, idLabel) {
  let senha1 = idInput1.value;
  let senha2 = idInput2.value;
  let textoErro = "Confirmar Senha *Senhas não conferem*";
  let textoSucesso = "Confirmar Senha";

  if (senha1 == senha2 && senha1 != "") {
    formatacaoSucesso(idInput2, idLabel, textoSucesso);
    this.statuSenha = true;
  } else {
    formatacaoErro(idInput2, idLabel, textoErro);
    this.statuSenha = false;
  }
}

function cadastrarUsuario() {
  let texto = "";
  if (validaFormulario()) {
    let listaUser = conectarLocalStorage();
    texto = "Cadastrando usuário...";

    listaUser.push({
      nome: nome.value,
      user: usuario.value,
      senha: senha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    redirecionarPagina("http://127.0.0.1:5500/login.html", 2000);
    msgSucesso(msg, texto);
  } else {
    texto = "Preencha todos os campos corretamente!";
    msgErro(msg, texto);
  }
}

function conectarLocalStorage() {
  let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
  return listaUser;
}

function redirecionarPagina(href, time) {
  setTimeout(() => {
    window.location.href = href;
  }, time);
}

function validaFormulario() {
  let statusFormulario = false;

  if (this.campoTexto && this.campoSenha && this.senha) {
    statusFormulario = true;
  }
  return statusFormulario;
}

function showPassword(id) {
  if (id.getAttribute("type") == "password") {
    id.setAttribute("type", "text");
  } else {
    id.setAttribute("type", "password");
  }
}
function formatacaoErro(idInput, idLabel, texto) {
  idInput.setAttribute("style", "color: red; border-color: red");
  idLabel.setAttribute(
    "style",
    "color: red; margin-top: -20px; font-size:16px"
  );
  idLabel.innerHTML = texto;
}
function formatacaoSucesso(idInput, idLabel, texto) {
  idInput.setAttribute("style", "color: green; border-color: green");
  idLabel.setAttribute(
    "style",
    "color: green; margin-top: -20px; font-size:16px"
  );
  idLabel.innerHTML = texto;
}
function msgErro(idElemento, texto) {
  idElemento.setAttribute(
    "style",
    "text-align: center; color: #ff0000;  background-color: #ffbbbb; padding: 10px;  border-radius: 4px;  display: block;"
  );
  idElemento.innerHTML = texto;
}
function msgSucesso(idElemento, texto) {
  idElemento.setAttribute(
    "style",
    "text-align: center; color: #00bb00;  background-color: #bbffbe; padding: 10px;  border-radius: 4px;  display: block;"
  );
  idElemento.innerHTML = texto;
}
