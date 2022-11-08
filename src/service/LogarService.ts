import { alertaDeErro, alertaDeSucesso } from "../views/alerta.js";
import { IBancoUsuarios, User } from "../model/cadastro.js";
import { DashboardView } from "../views/DashboardView.js";
import { cadastro } from "./CadastrarService.js";
import { divLateral } from "../index.js";
const msgErroLog = document.querySelector<HTMLElement>('#alerta-log-erro');
const msgSucessoLog = document.querySelector<HTMLElement>('#alerta-log-sucesso');
const spanMailLog = document.querySelector<HTMLElement>('#status-log-email')
const spanPassLog = document.querySelector<HTMLElement>('#status-log-senha')

//Cartao do login
export const login = document.querySelector<HTMLDivElement>("#cartao_login");

//Inputs de login 
const loginEmail = document.querySelector<HTMLInputElement>("#e-mail_login");
const loginPass = document.querySelector<HTMLInputElement>("#senha_login");

//Configuração da dashboard
const dashboard = document.querySelector<HTMLElement>("#dashboard_usuario");


export function logarUsuario(bancoUsuarios : IBancoUsuarios) {

    let dadosUsuario: User = bancoUsuarios.recuperarUsuario(loginEmail!.value)
    const dashboardView = new DashboardView(dadosUsuario, loginEmail!.value, bancoUsuarios);

    if (dadosUsuario && dadosUsuario.passUser == loginPass!.value) {
        alertaDeSucesso("Usuário encontrado")
        msgSucessoLog!.style.display = "block"
        msgSucessoLog!.innerHTML = "<strong>Usuário encontrado</strong>"
        msgErroLog!.style.display = "none"
        msgErroLog!.innerHTML = ""
    }
    else {
        alertaDeErro("E-mail e/ou senha incorretos!")
        msgDeErro("E-mail e/ou senha incorretos!");
        return false;
    }

    setTimeout(()=>{
        loginEmail!.value = ""
        loginPass!.value = ""
        loginEmail!.style.border = "none"
        loginPass!.style.border = "none"
        msgSucessoLog!.style.display = "none"
        msgErroLog!.style.display = "none"
    },450)

    setTimeout(() => {
            login!.style.display = "none";
            document.querySelector<HTMLElement>(".div-esquerda")!.style.display = "none";
            dashboard!.style.display = "flex"
            dashboard!.querySelector('#perfil_usuario')!.innerHTML = dashboardView.carregarDashboard()
            dashboard!.style.animation = "fromTop .6s 0.1s backwards"
            document.querySelector<HTMLElement>('#sair_dashboard')!.onclick = function() {
                dashboardView.sairDashboard(cadastro!, divLateral!, dashboard!, login!);               
            }
    }, 2000)
}


function msgDeErro(msg : string) {
    loginEmail!.style.borderColor = "red"
    loginPass!.style.borderColor = "red"
    msgSucessoLog!.style.display = "none"
    msgSucessoLog!.innerHTML = ""
    msgErroLog!.style.display = "block"
    msgErroLog!.innerHTML = `<strong>${msg}</strong>`
}