import { BancoUsuariosFactory } from "./cadastro.js";
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const alertaPersonalizado = document.querySelector('#alertId');
const msgAlert = document.querySelector('#msg');
const closeIcon = document.querySelector('.close-btn');
const login = document.getElementById("cartao_login") || null;
const loginEmail = document.querySelector("#e-mail_login");
const loginPass = document.querySelector("#senha_login");
const cadastro = document.getElementById("cartao_cadastro");
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
const userPass = document.querySelector("#senha_cadastro");
const spanPass = document.querySelector("#status-pass");
const userValidPass = document.querySelector("#confirma_senha_cadastro");
const userValidPassLabel = document.getElementById("confirma_senha_cadastro_label");
const spanUserValidPass = document.getElementById("status-confirmar-senha");
const square = document.querySelector(".square");
const message = document.querySelector("#message");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const characters = document.getElementById("charters");
const esqueceuSenha = document.getElementById("esqueceuSenha");
const esqueceuSenhaPage = document.querySelector(".esqueceu-senha");
const dashboard = document.querySelector("#dashboard_usuario");
const btnRemoverUsuario = document.querySelector("#btn-remover-usuario");
let bancoUsuarios = new BancoUsuariosFactory().create();
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
    let count = 0;
    if (letter != null && userPass != null) {
        let lowerCaseLetters = /[a-z]/g;
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        document.querySelector("#circleLetter").style.fill = "red";
        if (userPass.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
            document.querySelector("#circleLetter").style.fill = "#04AA6D";
            count++;
        }
    }
    let upperCaseLetters = /[A-Z]/g;
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    document.querySelector("#circleCapital").style.fill = "red";
    if (userPass.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        document.querySelector("#circleCapital").style.fill = "#04AA6D";
        count++;
    }
    let numbers = /[0-9]/g;
    number.classList.remove("valid");
    number.classList.add("invalid");
    document.querySelector("#circleNumber").style.fill = "red";
    if (userPass.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        document.querySelector("#circleNumber").style.fill = "#04AA6D";
        count++;
    }
    length.classList.remove("valid");
    length.classList.add("invalid");
    document.querySelector("#circleLength").style.fill = "red";
    if (userPass.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        document.querySelector("#circleLength").style.fill = "#04AA6D";
        count++;
    }
    characters.classList.remove("valid");
    characters.classList.add("invalid");
    document.querySelector("#circleCharters").style.fill = "red";
    if (userPass.value.match(/\w[!\@\$\#]/)) {
        characters.classList.remove("invalid");
        characters.classList.add("valid");
        document.querySelector("#circleCharters").style.fill = "#04AA6D";
        count++;
    }
    if (count >= 5) {
        userPass.style.borderColor = "green";
        spanPass.innerHTML = "";
    }
    else {
        userPass.style.borderColor = "red";
        spanPass.innerHTML = "<strong>O campo senha deve ser preenchido</strong>";
        spanPass.querySelector("strong").style.color = "red";
    }
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
    if (bancoUsuarios.verificarUsuario(dadosUsuario.emailUser)) {
        userMail.style.borderColor = "red";
        userName.style.border = "none";
        userValidPass.style.border = "none";
        msgErroCad.innerHTML = '<span>O email ja foi cadastrado!</span>';
        msgErroCad.style.display = "block";
        msgSucessoCad.innerHTML = "";
        msgSucessoCad.style.display = "none";
        return false;
    }
    else {
        bancoUsuarios.cadastroUsuario(dadosUsuario);
        msgSucessoCad.innerHTML = '<span>Usuario cadastrado com sucesso</span>';
        msgSucessoCad.style.display = "block";
        msgErroCad.style.display = "none";
        setTimeout(() => {
            userName.value = "";
            userName.style.border = "none";
            userMail.value = "";
            userMail.style.border = "none";
            userPass.value = "";
            userPass.style.border = "none";
            userValidPass.value = "";
            userValidPass.style.border = "none";
        }, 1000);
        setTimeout(() => {
            msgSucessoCad.style.display = "none";
            cadastro.style.display = "none";
            login.style.display = "none";
            document.querySelector(".div-esquerda").style.display = "none";
            dashboard.style.display = "flex";
            dashboard.innerHTML = `
                <div>
                <h2 class="msg-nome-dash">Olá, ${dadosUsuario['nameUser']}</h2>
                <span class="msg-email-dash">${dadosUsuario['emailUser']}</span>
                <span>Voltar para o <a href="#" id="sair_dashboard">Cadastro</a></span>   
                <button id="btn-remover-usuario" class="btn-submit btn-remover-usuario">Remover Usuário</button>
                </div>
                `;
            btnRemoverUsuario === null || btnRemoverUsuario === void 0 ? void 0 : btnRemoverUsuario.classList.add("btn-submit");
            btnRemoverUsuario === null || btnRemoverUsuario === void 0 ? void 0 : btnRemoverUsuario.classList.add("btn-remover-usuario");
            dashboard.style.animation = "fromTop .6s 0.1s backwards";
            document.querySelector('#sair_dashboard').onclick = function () {
                cadastro.style.animation = "fromTop .6s 0.1s backwards";
                cadastro.style.display = "flex";
                document.querySelector(".div-esquerda").style.display = "flex";
                login.style.display = "none";
                dashboard.style.display = "none";
            };
        }, 3000);
        return true;
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
    let dadosUsuario = bancoUsuarios.recuperarUsuario(loginEmail.value);
    if (dadosUsuario && dadosUsuario.passUser == loginPass.value) {
        alertaDeSucesso("Usuário encontrado");
        msgSucessoLog.style.display = "block";
        msgSucessoLog.innerHTML = "<strong>Usuário encontrado</strong>";
        msgErroLog.style.display = "none";
        msgErroLog.innerHTML = "";
    }
    else {
        alertaDeErro("E-mail e/ou senha incorretos!");
        loginEmail.style.borderColor = "red";
        loginPass.style.borderColor = "red";
        msgSucessoLog.style.display = "none";
        msgSucessoLog.innerHTML = "";
        msgErroLog.style.display = "block";
        msgErroLog.innerHTML = "<strong>E-mail e/ou senha incorretos!</strong>";
        return false;
    }
    setTimeout(() => {
        loginEmail.value = "";
        loginPass.value = "";
        loginEmail.style.border = "none";
        loginPass.style.border = "none";
        msgSucessoLog.style.display = "none";
        msgErroLog.style.display = "none";
    }, 450);
    setTimeout(() => {
        cadastro.style.display = "none";
        login.style.display = "none";
        document.querySelector(".div-esquerda").style.display = "none";
        dashboard.style.display = "flex";
        dashboard.innerHTML = `
            <div>
            <h2 class="msg-nome-dash">Bem vindo de volta, ${dadosUsuario['nameUser']}</h2>
            <span class="msg-email-dash">${dadosUsuario['emailUser']}</span>
            <span>Voltar para o <a href="#" id="sair_dashboard">Login</a></span>
        </div>
            `;
        dashboard.style.animation = "fromTop .6s 0.1s backwards";
        document.querySelector('#sair_dashboard').onclick = function () {
            cadastro.style.animation = "fromTop .6s 0.1s backwards";
            cadastro.style.display = "none";
            document.querySelector(".div-esquerda").style.display = "flex";
            login.style.display = "flex";
            dashboard.style.display = "none";
        };
    }, 1000);
};
function mostrarAlerta(msg) {
    msgAlert.innerHTML = msg;
    if (alertaPersonalizado != null) {
        alertaPersonalizado.classList.remove('hide');
        alertaPersonalizado.classList.remove('successAlert');
        alertaPersonalizado.classList.remove('warningAlert');
        alertaPersonalizado.classList.add('show');
        alertaPersonalizado.classList.add('showAlert');
        setTimeout(() => {
            alertaPersonalizado.classList.add('hide');
            alertaPersonalizado.classList.remove('showAlert');
        }, 3000);
        closeIcon.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide');
            alertaPersonalizado.classList.remove('showAlert');
        });
    }
}
function alertaDeErro(msg) {
    msgAlert.innerHTML = msg;
    if (alertaPersonalizado != null) {
        alertaPersonalizado.classList.remove('hide');
        alertaPersonalizado.classList.remove('successAlert');
        alertaPersonalizado.classList.add('warningAlert');
        alertaPersonalizado.classList.add('show');
        alertaPersonalizado.classList.add('showAlert');
        setTimeout(() => {
            alertaPersonalizado.classList.add('hide');
            alertaPersonalizado.classList.remove('showAlert');
        }, 3000);
        closeIcon.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide');
            alertaPersonalizado.classList.remove('showAlert');
        });
    }
}
function alertaDeSucesso(msg) {
    msgAlert.innerHTML = msg;
    if (alertaPersonalizado != null) {
        alertaPersonalizado.classList.remove('hide');
        alertaPersonalizado.classList.remove('warningAlert');
        alertaPersonalizado.classList.add('successAlert');
        alertaPersonalizado.classList.add('show');
        alertaPersonalizado.classList.add('showAlert');
        setTimeout(() => {
            alertaPersonalizado.classList.add('hide');
            alertaPersonalizado.classList.remove('showAlert');
        }, 3000);
        closeIcon.addEventListener('click', () => {
            alertaPersonalizado.classList.add('hide');
            alertaPersonalizado.classList.remove('showAlert');
        });
    }
}
