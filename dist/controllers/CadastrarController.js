import { bancoUsuarios, divLateral } from "../index.js";
import { DashboardView } from "../views/DashboardView.js";
import { login } from "./LogarController.js";
const userName = document.querySelector("#nome_cadastro");
const userMail = document.querySelector("#e-mail_cadastro");
const userPass = document.querySelector("#senha_cadastro");
const userValidPass = document.querySelector("#confirma_senha_cadastro");
const msgSucessoCad = document.querySelector('#alerta-cad-sucesso');
const msgErroCad = document.querySelector('#alerta-cad-error');
export const cadastro = document.querySelector("#cartao_cadastro");
export const dashboard = document.querySelector("#dashboard_usuario");
const btnRemoverUsuario = document.querySelector("#btn-remover-usuario");
export function cadastrarUsuario(user) {
    const dashboardView = new DashboardView(user, user.emailUser, bancoUsuarios);
    if (bancoUsuarios.verificarUsuario(user.emailUser)) {
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
        bancoUsuarios.cadastroUsuario(user);
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
            msgSucessoCad.style.display = "none";
            cadastro.style.display = "none";
            document.querySelector(".div-esquerda").style.display = "none";
            dashboard.style.display = "flex";
            dashboard.querySelector('#perfil_usuario').innerHTML = dashboardView.carregarDashboard();
            dashboard.style.animation = "fromTop .6s 0.1s backwards";
            document.querySelector('#sair_dashboard').onclick = function () {
                dashboardView.sairDashboard(cadastro, divLateral, dashboard, login);
            };
            dashboardView.removerUsuario(dashboard.querySelector("#btn_remover_usuario"));
        }, 1000);
        return true;
    }
}
