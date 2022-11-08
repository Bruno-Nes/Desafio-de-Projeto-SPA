import { mostrarAlerta } from "./views/alerta.js";
import { cadastrarUsuario } from "./service/CadastrarService.js";
import { BancoUsuariosFactory } from "./model/cadastro.js";
import { logarUsuario } from "./service/LogarService.js";
import { verificarSenha } from "./views/verificapass.js";
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const divLateral = document.querySelector(".div-esquerda");
const login = document.querySelector("#cartao_login");
const loginEmail = document.querySelector("#e-mail_login");
const loginPass = document.querySelector("#senha_login");
const cadastro = document.querySelector("#cartao_cadastro");
const userName = document.querySelector("#nome_cadastro");
const userLabel = document.getElementById("user_label");
const spanName = document.getElementById("status-nome");
const userMail = document.querySelector("#e-mail_cadastro");
const emailLabel = document.getElementById("label_Email");
const spanMail = document.getElementById("status-email");
const msgSucessoCad = document.querySelector('#alerta-cad-sucesso');
const msgErroCad = document.querySelector('#alerta-cad-error');
const msgErroLog = document.querySelector('#alerta-log-erro');
const msgSucessoLog = document.querySelector('#alerta-log-sucesso');
const spanMailLog = document.querySelector('#status-log-email');
const spanPassLog = document.querySelector('#status-log-senha');
const btnPassView = document.querySelector(".fa-eye");
const btnPassViewCad = document.querySelector("#verSenha");
const btnPassViewCadConf = document.querySelector("#verConfirmarSenha");
export const userPass = document.querySelector("#senha_cadastro");
export const spanPass = document.querySelector("#status-pass");
const userValidPass = document.querySelector("#confirma_senha_cadastro");
const userValidPassLabel = document.getElementById("confirma_senha_cadastro_label");
const spanUserValidPass = document.getElementById("status-confirmar-senha");
const square = document.querySelector(".square");
const message = document.querySelector("#message");
const esqueceuSenha = document.getElementById("esqueceuSenha");
const esqueceuSenhaPage = document.querySelector(".esqueceu-senha");
const dashboard = document.querySelector("#dashboard_usuario");
const btnRemoverUsuario = document.querySelector("#btn-remover-usuario");
export let bancoUsuarios = new BancoUsuariosFactory().create();
btnPassView === null || btnPassView === void 0 ? void 0 : btnPassView.addEventListener('click', () => {
    let inputSenha = document.querySelector('.input-senha');
    if ((inputSenha === null || inputSenha === void 0 ? void 0 : inputSenha.getAttribute('type')) == 'password') {
        inputSenha.setAttribute('type', 'text');
        btnPassView === null || btnPassView === void 0 ? void 0 : btnPassView.classList.remove("fa-eye");
        btnPassView === null || btnPassView === void 0 ? void 0 : btnPassView.classList.add("fa-eye-slash");
    }
    else {
        inputSenha === null || inputSenha === void 0 ? void 0 : inputSenha.setAttribute('type', 'password');
        btnPassView === null || btnPassView === void 0 ? void 0 : btnPassView.classList.add("fa-eye");
        btnPassView === null || btnPassView === void 0 ? void 0 : btnPassView.classList.remove("fa-eye-slash");
    }
});
btnPassViewCad === null || btnPassViewCad === void 0 ? void 0 : btnPassViewCad.addEventListener('click', () => {
    if ((userPass === null || userPass === void 0 ? void 0 : userPass.getAttribute('type')) == 'password') {
        userPass === null || userPass === void 0 ? void 0 : userPass.setAttribute('type', 'text');
        btnPassViewCad === null || btnPassViewCad === void 0 ? void 0 : btnPassViewCad.classList.remove("fa-eye");
        btnPassViewCad === null || btnPassViewCad === void 0 ? void 0 : btnPassViewCad.classList.add("fa-eye-slash");
    }
    else {
        userPass === null || userPass === void 0 ? void 0 : userPass.setAttribute('type', 'password');
        btnPassViewCad === null || btnPassViewCad === void 0 ? void 0 : btnPassViewCad.classList.add("fa-eye");
        btnPassViewCad === null || btnPassViewCad === void 0 ? void 0 : btnPassViewCad.classList.remove("fa-eye-slash");
    }
});
btnPassViewCadConf === null || btnPassViewCadConf === void 0 ? void 0 : btnPassViewCadConf.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirma_senha_cadastro');
    if ((inputSenha === null || inputSenha === void 0 ? void 0 : inputSenha.getAttribute('type')) == 'password') {
        inputSenha === null || inputSenha === void 0 ? void 0 : inputSenha.setAttribute('type', 'text');
        btnPassViewCadConf === null || btnPassViewCadConf === void 0 ? void 0 : btnPassViewCadConf.classList.remove("fa-eye");
        btnPassViewCadConf === null || btnPassViewCadConf === void 0 ? void 0 : btnPassViewCadConf.classList.add("fa-eye-slash");
    }
    else {
        inputSenha === null || inputSenha === void 0 ? void 0 : inputSenha.setAttribute('type', 'password');
        btnPassViewCadConf === null || btnPassViewCadConf === void 0 ? void 0 : btnPassViewCadConf.classList.add("fa-eye");
        btnPassViewCadConf === null || btnPassViewCadConf === void 0 ? void 0 : btnPassViewCadConf.classList.remove("fa-eye-slash");
    }
});
userName === null || userName === void 0 ? void 0 : userName.addEventListener('keyup', () => {
    let userNameValue = userName === null || userName === void 0 ? void 0 : userName.value;
    if (userNameValue != undefined && userName && spanName) {
        if (userName !== undefined && userNameValue.length <= 4) {
            userName.style.border = "2px solid red";
            spanName.innerHTML = "<strong>Insira no mínimo 5 caracteres!</strong>";
            spanName.querySelector("strong").style.color = "red";
        }
        else {
            userName.style.border = "2px solid green";
            spanName.innerHTML = "";
        }
    }
});
userMail.addEventListener('keyup', () => {
    if (!userMail.value.match(regexEmail)) {
        userMail.style.border = "2px solid red";
        spanMail.innerHTML = "<strong>Parece que você está esquecendo de algo!</strong>";
        spanMail.querySelector("strong").style.color = "red";
    }
    else {
        userMail.style.border = "2px solid green";
        spanMail.innerHTML = "";
    }
});
userPass.onfocus = function () {
    message.style.display = "flex";
    message.style.flexDirection = "column";
};
userPass.onblur = function () {
    message.style.display = "none";
};
userPass.onkeyup = function () {
    verificarSenha(userPass);
};
if (userValidPass != null) {
    userValidPass.addEventListener('keyup', () => {
        if (!(userValidPass.value == userPass.value)) {
            userValidPass.style.border = "2px solid red";
            spanUserValidPass.innerHTML = "<strong>As senhas não estão iguais</strong>";
            spanUserValidPass.querySelector("strong").style.color = "red";
        }
        else if (userPass.value == "") {
            userValidPass.style.border = "2px solid red";
            spanUserValidPass.innerHTML = "";
        }
        else {
            userValidPass.style.border = "2px solid green";
            spanUserValidPass.innerHTML = "";
        }
    });
}
document.getElementById("mudar_para_login").onclick = function () {
    if (login != null && cadastro != null) {
        login.style.animation = "fromTop .6s 0.1s backwards";
        login.style.display = "flex";
        cadastro.style.display = "none";
    }
};
document.getElementById("mudar_para_cadastro").onclick = function () {
    if (cadastro != null && login != null) {
        cadastro.style.animation = "fromTop .6s 0.1s backwards";
        cadastro.style.display = "flex";
        login.style.display = "none";
    }
};
document.querySelector("#cadastrar").onclick = function (e) {
    e.preventDefault();
    if (!userName.value || userName.value == undefined) {
        spanName.innerHTML = "<strong>O campo de usuário deve ser preenchido</strong>";
        spanName.querySelector("strong").style.color = "red";
        spanName.style.color = "red";
        mostrarAlerta("O campo de usuário deve ser preenchido");
        userName.style.borderColor = "red";
        return false;
    }
    if (!userMail.value) {
        spanMail.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>";
        spanMail.querySelector("strong").style.color = "red";
        mostrarAlerta("O campo e-mail deve ser preenchido!");
        userMail.style.borderColor = "red";
        return false;
    }
    if (!userMail.value.match(regexEmail)) {
        spanMail.innerHTML = "<strong>E-mail inválido</strong>";
        spanMail.style.color = "red";
        mostrarAlerta("E-mail inválido");
        userMail.style.borderColor = "red";
        return false;
    }
    if (!userPass.value) {
        spanPass.innerHTML = "<strong>O campo senha deve ser preenchido</strong>";
        mostrarAlerta("O campo senha deve ser preenchido");
        userPass.style.borderColor = "red";
        return false;
    }
    if (!userValidPass.value) {
        spanUserValidPass.innerHTML = "<strong>O campo confirmar senha deve ser preenchido</strong>";
        spanUserValidPass.querySelector("strong").style.color = "red";
        mostrarAlerta("O campo confirmar senha deve ser preenchido");
        userValidPass.style.borderColor = "red";
        return false;
    }
    if (userValidPass.value != userPass.value) {
        spanUserValidPass.innerHTML = "<strong>As senhas não estão iguais</strong>";
        spanUserValidPass.querySelector("strong").style.color = "red";
        userValidPass.style.borderColor = "red";
        return false;
    }
    let dadosUsuario = {
        nameUser: userName.value,
        emailUser: userMail.value,
        passUser: userPass.value
    };
    cadastrarUsuario(dadosUsuario);
};
esqueceuSenha.onclick = function () {
    if (esqueceuSenhaPage && cadastro && login) {
        esqueceuSenhaPage.style.display = "flex";
        esqueceuSenhaPage.style.animation = "fromTop .6s 0.1s backwards";
        cadastro.style.display = "none";
        login.style.display = "none";
    }
    document.querySelector(".div-esquerda").style.display = "none";
};
document.getElementById("sair_esqueceu_senha").onclick = function () {
    login.style.display = "flex";
    document.querySelector(".esqueceu-senha").style.display = "none";
    document.querySelector(".div-esquerda").style.display = "flex";
};
document.getElementById("login").onclick = function (e) {
    e.preventDefault();
    if (!(loginEmail === null || loginEmail === void 0 ? void 0 : loginEmail.value)) {
        mostrarAlerta("O campo e-mail deve ser preenchido!");
        loginEmail.style.borderColor = "red";
        spanMailLog.innerHTML = "<strong>O campo e-mail deve ser preenchido!</strong>";
        spanMailLog.querySelector("strong").style.color = "red";
        return false;
    }
    if (!(loginPass === null || loginPass === void 0 ? void 0 : loginPass.value)) {
        mostrarAlerta("O campo senha deve ser preenchido");
        loginPass.style.borderColor = "red";
        spanPassLog.innerHTML = "<strong>O campo senha deve ser preenchido</strong>";
        spanPassLog.querySelector("strong").style.color = "red";
        return false;
    }
    logarUsuario(bancoUsuarios);
};
