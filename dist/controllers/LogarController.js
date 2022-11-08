import { alertaDeErro, alertaDeSucesso } from "../views/alerta.js";
import { DashboardView } from "../views/DashboardView.js";
import { cadastro } from "./CadastrarController.js";
import { divLateral } from "../index.js";
const msgErroLog = document.querySelector('#alerta-log-erro');
const msgSucessoLog = document.querySelector('#alerta-log-sucesso');
const spanMailLog = document.querySelector('#status-log-email');
const spanPassLog = document.querySelector('#status-log-senha');
export const login = document.querySelector("#cartao_login");
const loginEmail = document.querySelector("#e-mail_login");
const loginPass = document.querySelector("#senha_login");
const dashboard = document.querySelector("#dashboard_usuario");
export function logarUsuario(bancoUsuarios) {
    let dadosUsuario = bancoUsuarios.recuperarUsuario(loginEmail.value);
    const dashboardView = new DashboardView(dadosUsuario, dadosUsuario.emailUser, bancoUsuarios);
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
        dashboard.querySelector('#perfil_usuario').innerHTML = dashboardView.carregarDashboard();
        dashboard.style.animation = "fromTop .6s 0.1s backwards";
        document.querySelector('#sair_dashboard').onclick = function () {
            dashboardView.sairDashboard(cadastro, divLateral, dashboard, login);
        };
    }, 2000);
}
function msgDeErro(msg) {
    loginEmail.style.borderColor = "red";
    loginPass.style.borderColor = "red";
    msgSucessoLog.style.display = "none";
    msgSucessoLog.innerHTML = "";
    msgErroLog.style.display = "block";
    msgErroLog.innerHTML = `<strong>${msg}</strong>`;
}
