import { verificarSenha } from "./views/verificapass.js";
import { CadastroController } from "./controllers/CadastroController.js";
import { LoginController } from "./controllers/LoginController.js";
export const divLateral = document.querySelector(".div-esquerda");
const login = document.querySelector("#cartao_login");
const cadastro = document.querySelector("#cartao_cadastro");
const spanName = document.getElementById("status-nome");
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
export const spanPass = document.querySelector("#status-pass");
const userValidPassLabel = document.getElementById("confirma_senha_cadastro_label");
const spanUserValidPass = document.getElementById("status-confirmar-senha");
const message = document.querySelector("#message");
const esqueceuSenha = document.getElementById("esqueceuSenha");
const esqueceuSenhaPage = document.querySelector(".esqueceu-senha");
export const cadastroController = new CadastroController();
const loginController = new LoginController();
const userName = cadastroController.getInputNome();
const userMail = cadastroController.getInputEmail();
const userPass = cadastroController.getInputPass();
const userValidPass = cadastroController.getInputValidaSenha();
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
    if (!userMail.value.match(cadastroController.regexEmail)) {
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
    verificarSenha(cadastroController.getInputPass(), spanPass);
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
    if (cadastroController.validaCampos(spanName, spanMail, spanPass, spanUserValidPass)) {
        cadastroController.entrarUsuario();
        cadastroController.limparCampos();
        msgErroCad.style.display = "none";
        return true;
    }
    else {
        msgSucessoCad.style.display = "none";
        msgErroCad.style.display = "flex";
        msgErroCad.innerHTML = `Não foi possível fazer o cadastro`;
        return false;
    }
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
    if (loginController.validaCampos(spanMailLog, spanPassLog)) {
        loginController.entrarUsuario();
        setTimeout(() => {
            loginController.limparCampos();
            spanMailLog.innerHTML = "";
            spanPassLog.innerHTML = "";
        }, 2000);
        return true;
    }
    return false;
};
