import { alertaDeErro, alertaDeSucesso } from "./views/alerta.js";
import { carregarDashboard } from "./views/dashboard.js";
const msgErroLog = document.querySelector('#alerta-log-erro');
const msgSucessoLog = document.querySelector('#alerta-log-sucesso');
const spanMailLog = document.querySelector('#status-log-email');
const spanPassLog = document.querySelector('#status-log-senha');
const login = document.querySelector("#cartao_login");
const loginEmail = document.querySelector("#e-mail_login");
const loginPass = document.querySelector("#senha_login");
const dashboard = document.querySelector("#dashboard_usuario");
const btnRemoverUsuario = document.querySelector("#btn-remover-usuario");
export function logarUsuario(bancoUsuarios) {
    if (!bancoUsuarios.verificarUsuario(loginEmail.value)) {
        msgDeErro("O usuário não existe");
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
        msgDeErro("E-mail e/ou senha incorretos!");
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
        login.style.display = "none";
        document.querySelector(".div-esquerda").style.display = "none";
        dashboard.style.display = "flex";
        dashboard.innerHTML = carregarDashboard(dadosUsuario, bancoUsuarios);
        dashboard.style.animation = "fromTop .6s 0.1s backwards";
        document.querySelector('#sair_dashboard').onclick = function () {
            document.querySelector(".div-esquerda").style.display = "flex";
            login.style.display = "flex";
            dashboard.style.display = "none";
        };
    }, 1000);
}
function msgDeErro(msg) {
    loginEmail.style.borderColor = "red";
    loginPass.style.borderColor = "red";
    msgSucessoLog.style.display = "none";
    msgSucessoLog.innerHTML = "";
    msgErroLog.style.display = "block";
    msgErroLog.innerHTML = `<strong>${msg}</strong>`;
}
